import produce, { original } from "immer";
import { newOrder } from "../data/newOrderJson";

const initialState = newOrder;

const newOrderState = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_GROUP": {
      return produce(state, (draft) => {
        const chosenGroup = draft.groups.filter(
          (group) => group.id === action.id
        );
        draft.chosenGroup = chosenGroup;
      });
    }
    case "NEW_ORDER_VIEW_CLEARANCE": {
      return produce(state, (draft) => {
        if (draft.chosenGroup !== null) {
          draft.chosenGroup = null;
          draft.showOrderSummary = false;
        }
      });
    }
    case "SHOW_ORDER_SUMMARY": {
      return produce(state, (draft) => {
        draft.showOrderSummary = true;
      });
    }
    case "CHECK_MEAL_AVAILABILITY": {
      return produce(state, (draft) => {
        const chosenGroup = state.chosenGroup[0].products;
        let ingredientsReady = [];
        chosenGroup.forEach((meal, mealIndex) => {
          meal.ingredients.forEach((ingr, ingrIndex) => {
            action.productsToManage.forEach((prodToManage) => {
              if (ingr.id === prodToManage.id) {
                if (ingr.quantity <= prodToManage.inState.ready) {
                  ingredientsReady.push(ingr);
                }
              }
            });
          });
          if (
            chosenGroup[mealIndex].ingredients.length ===
            ingredientsReady.length
          ) {
            draft.chosenGroup[0].products[mealIndex].readyToPrepare = true;
          } else {
            draft.chosenGroup[0].products[mealIndex].readyToPrepare = false;
          }
          ingredientsReady = [];
        });
      });
    }
    case "CHOOSE_PRODUCT": {
      return produce(state, (draft) => {
        const chosenProduct = draft.chosenGroup[0].products.filter(
          (product) => product.index === action.index
        )[0];
        draft.chosenProduct = chosenProduct;
        draft.totalPrice += chosenProduct.price;
        if (draft.newOrderSummary.length > 0) {
          let productIndex = null;
          draft.newOrderSummary.forEach((order, ind) => {
            if (order.index === draft.chosenProduct.index) {
              return (productIndex = ind);
            }
          });
          if (productIndex !== null) {
            draft.newOrderSummary[productIndex].quantity += 1;
            productIndex = null;
          } else {
            draft.newOrderSummary.push(chosenProduct);
            productIndex = null;
          }
        } else {
          draft.newOrderSummary.push(chosenProduct);
        }
      });
    }
    case "DELETE_ORDER_SUMMARY_ITEM": {
      return produce(state, (draft) => {
        let minusTotalPrice;
        const productsToManage = action.productsToManage;
        state.newOrderSummary.forEach((item) => {
          item.ingredients.forEach((ingr) =>
            productsToManage.forEach((product, index) => {
              if (item.index === action.index && ingr.id === product.id) {
                productsToManage[index].inState.locked -=
                  item.quantity * ingr.quantity;
                productsToManage[index].inState.ready +=
                  item.quantity * ingr.quantity;
                minusTotalPrice = item.quantity * item.price;
                state.chosenGroup[0].products.forEach((meal, mealIndex) => {
                  if (meal.index === action.index) {
                    draft.chosenGroup[0].products[
                      Number(mealIndex)
                    ].readyToPrepare = true;
                  }
                });
              }
            })
          );
        });
        const newOrderSummary = draft.newOrderSummary.filter(
          (item) => item.index !== action.index
        );
        draft.newOrderSummary = newOrderSummary;
        draft.totalPrice -= minusTotalPrice;
      });
    }
    case "POST_NEW_ORDER": {
      return produce(state, (draft) => {
        const orders = draft.orders;
        const newOrderSummary = draft.newOrderSummary;
        const profiles = state.profiles;

        const orderNumber = () => {
          if (orders.length < 10) {
            return `00${orders.length + 1}`;
          } else if (orders.length >= 10 && orders.length < 100) {
            return `0${orders.length + 1}`;
          }
        };
        const orderItems = [];
        newOrderSummary.map(({ index, itemName, quantity, size, unit }) => {
          let itemTemplate = {
            index: `${index}`,
            complete: false,
            item: `${itemName}`,
            quantity: `${quantity}`,
            size: `${size}`,
            unit: `${unit}`,
          };

          return orderItems.push(itemTemplate);
        });

        const orderTemplate = {
          number: `${orderNumber()}`,
          status: "notReady",
          complete: false,
          orderItems: orderItems,
          profiles: profiles,
        };

        let newOrder = draft.orders;
        newOrder.push(orderTemplate);
        draft.orders = newOrder;
        draft.newOrderSummary = [];
        draft.totalPrice = 0.0;
        draft.chosenProduct = [];
      });
    }
    case "CHECK_INGR_AVAILABILITY": {
      return produce(state, (draft) => {
        let ingredientsWithInsufficientQuantity = [];
        const productsToManage = action.productsToManage;
        const ingredients = action.ingredients;
        const mealId = action.mealId;

        ingredients.forEach((ingr) =>
          productsToManage.forEach((product, index) => {
            if (ingr.id === product.id) {
              if (product.inState.ready >= ingr.quantity) {
                // productsToManage[index].inState.locked =+ ingr.quantity;
                // productsToManage[index].inState.ready -= ingr.quantity;
                // console.log('productsToManage', productsToManage)
              } else {
                let missingQuantity = ingr.quantity - product.inState.ready;
                let newIngr = {
                  ...ingr,
                  missingQuantity: missingQuantity,
                };
                ingredientsWithInsufficientQuantity.push(newIngr);
                draft.chosenGroup[0].products[
                  Number(mealId)
                ].readyToPrepare = false;
              }
            }
          })
        );
        // });
        draft.ingredientsWithInsufficientQuantity =
          ingredientsWithInsufficientQuantity;
      });
    }
    case "RESERVE_PRODUCTS": {
      return produce(state, (draft) => {
        let lastOrder = state.orders[state.orders.length - 1];
        let ingredientsToReserve = [];
        let productsToManage = action.prod

        state.groups.forEach((group) =>
          group.products.forEach((product) =>
            lastOrder.orderItems.forEach((item) => {
              // if (product.inState.ready >= item.quantity) {
              //   product.inState.locked =+ item.quantity;
              //   product.inState.ready -= item.quantity;
              //   // console.log('productsToManage', productsToManage)
              // }
              if (product.index === item.index) {
                if (item.quantity > 1) {
                  let newProductIngredientsQuantity = product.ingredients.map(
                    (ingr) => {
                      let itemQuantity = Number(item.quantity);
                      let newIngrQuantity = ingr.quantity * itemQuantity;
                      return (ingr = {
                        ...ingr,
                        quantity: newIngrQuantity,
                      });
                    }
                  );
                  ingredientsToReserve.push(newProductIngredientsQuantity);
                } else {
                  ingredientsToReserve.push(product.ingredients);
                }
              }
            })
          )
        );
        draft.ingredientsToReserve = [...ingredientsToReserve];
      });
    }
    case "ITEM_READY": {
      return produce(state, (draft) => {
        const data = original(draft.orders);
        const orderIndex = data.findIndex(
          (order) => order.number === action.orderNumber
        );
        const itemIndex = data[orderIndex].orderItems.findIndex(
          (item) => item.index === action.index
        );
        draft.orders[orderIndex].orderItems[itemIndex].complete =
          !draft.orders[orderIndex].orderItems[itemIndex].complete;
      });
    }
    case "ALL_ITEMS_READY": {
      return produce(state, (draft) => {
        const data = original(draft.orders);
        const orderIndex = data.findIndex(
          (order) => order.number === action.orderNumber
        );
        const itemsCounter = data[orderIndex].orderItems.length;
        let itemsCompletedCounter = 0;
        data[orderIndex].orderItems.map((item) => {
          if (item.complete) {
            itemsCompletedCounter += 1;
          }
          return itemsCompletedCounter;
        });
        if (itemsCounter === itemsCompletedCounter) {
          draft.orders[orderIndex].complete = true;
        } else {
          draft.orders[orderIndex].complete = false;
        }
      });
    }
    case "ORDER_STATUS": {
      return produce(state, (draft) => {
        const data = original(draft.orders);
        const orderIndex = data.findIndex(
          (order) => order.number === action.orderNumber
        );
        const itemsCounter = data[orderIndex].orderItems.length;
        let itemsCompletedCounter = 0;
        data[orderIndex].orderItems.map((item) => {
          if (item.complete) {
            itemsCompletedCounter += 1;
          }
          return itemsCompletedCounter;
        });
        if (itemsCompletedCounter === 0) {
          draft.orders[orderIndex].status = "notReady";
          draft.orders[orderIndex].profiles[0].active = false;
          draft.orders[orderIndex].profiles[1].active = false;
        }
        if (itemsCompletedCounter > 0 && itemsCompletedCounter < itemsCounter) {
          draft.orders[orderIndex].status = "almostReady";
        }
        if (itemsCompletedCounter === itemsCounter) {
          draft.orders[orderIndex].status = "ready";
        }
      });
    }
    case "PROFILE_SELECTED": {
      return produce(state, (draft) => {
        const data = original(draft.orders);
        const orderIndex = data.findIndex(
          (order) => order.number === action.orderNumber
        );
        state.profiles.forEach(({ profileName, isActive }, profileIndex) => {
          if (profileName === action.profile.profileName) {
            draft.orders[orderIndex].profiles[profileIndex].isActive =
              !draft.orders[orderIndex].profiles[profileIndex].isActive;
            if (data[orderIndex].status === "notReady") {
              draft.orders[orderIndex].status = "almostReady";
            }
          } else {
            draft.orders[orderIndex].profiles[profileIndex].isActive = false;
          }
        });
        // const checkIfAnyProfileIsActive = 
        if (!draft.orders[orderIndex].profiles.some(profile => profile.isActive) && !draft.orders[orderIndex].orderItems.some(item => item.complete)) {
          draft.orders[orderIndex].status = "notReady";
        }
        // if (profileName[1] === action.profile.name) {
        //   draft.orders[orderIndex].profiles[1].isActive =
        //     !draft.orders[orderIndex].profiles[1].isActive;
        //   draft.orders[orderIndex].profiles[0].isActive = false;
        //   if (data[orderIndex].status === "notReady") {
        //     draft.orders[orderIndex].status = "almostReady";
        //   }
        // }
        // if (!profileActive) {
        //   draft.orders[orderIndex].status = "notReady";
        // }
      });
    }
    case "ORDER_READY_TO_GO": {
      return produce(state, (draft) => {
        const data = original(draft.orders);
        const orderIndex = data.findIndex(
          (order) => order.number === action.orderNumber
        );
        draft.orders[orderIndex].status = "readyToGo";
      });
    }
    case "ORDER_DELIVERED": {
      return produce(state, (draft) => {
        const data = original(draft.orders);
        const orderIndex = data.findIndex(
          (order) => order.number === action.orderNumber
        );
        draft.orders[orderIndex].status = "Delivered";
      });
    }
    case "PRODUCTS_TO_MANAGE": {
      return produce(state, (draft) => {
        const productsToManage = [];
        state.groups.forEach((group) =>
          group.products.forEach((product) =>
            product.ingredients.forEach((ingredient) =>
              productsToManage.push(ingredient)
            )
          )
        );
        const sortedproductsToManage = productsToManage.sort(
          (a, b) => a.id - b.id
        );
        let productsToManageRemovedDuplicates = [];
        sortedproductsToManage.forEach((product, index) => {
          if (
            productsToManageRemovedDuplicates.length > 0 &&
            product.id ===
              productsToManageRemovedDuplicates[
                productsToManageRemovedDuplicates.length - 1
              ].id
          ) {
          } else {
            productsToManageRemovedDuplicates.push(product);
          }
        });
        draft.productsToManage = productsToManageRemovedDuplicates;
      });
    }
    default:
      return state;
  }
};

export default newOrderState;
