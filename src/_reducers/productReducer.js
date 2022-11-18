import produce, { original } from "immer";
import { productsToManage } from "../data/productsToManageJson";

const initialState = productsToManage;

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'PRODUCTS_TO_MANAGE': {
    //   return produce(state, (draft) => {
    //     const productsToManage = []
    //     state.forEach(group => (
    //       group.products.forEach(product => (
    //         product.ingredients.forEach(ingredient => (
    //             productsToManage.push(ingredient)
    //         )
    //       ))
    //       ))
    //     )
    //     const sortedproductsToManage = productsToManage.sort((a, b) => a.id - b.id)
    //     let productsToManageRemovedDuplicates = []
    //     sortedproductsToManage.forEach((product, index) => {
    //       if (productsToManageRemovedDuplicates.length > 0 && product.id === productsToManageRemovedDuplicates[productsToManageRemovedDuplicates.length - 1].id) {
    //       } else {

    //         productsToManageRemovedDuplicates.push(product)
    //       }
    //     })
    //     draft.productsToManage = productsToManageRemovedDuplicates
    //   })
    // }
    case "ADD_PRODUCT_TO_STATE": {
      return produce(state, (draft) => {
        const products = original(draft.productsToManage);
        const time = Date.now();
        const timeNow = new Date(time);
        const productIndex = products.findIndex(
          (product) => product.id === action.id
        );
        const productToDisplay = products[productIndex];
        const preparationTimeInSeconds =
          parseInt(products[productIndex].defaultTime.minutes) * 60 +
          parseInt(products[productIndex].defaultTime.seconds);
        const productToPrepare = products[productIndex].toPrepare;
        const stockEntry = {
          timeStamp: timeNow.toISOString(),
          preparationTime: productToPrepare ? preparationTimeInSeconds : null,
          timeDelta: productToPrepare ? -preparationTimeInSeconds : null,
          // timeStamp: "Sun, 02 May 2021 05:24:39 GMT",
          addValue: action.currentValue,
          // isLocked: false,
        };
        const countable = products[productIndex].countable;
        if (countable) {
          for (let i = 0; i < action.currentValue; i++) {
            let timeDelta =
              Date.parse(timeNow.toISOString()) +
              preparationTimeInSeconds * 1000 -
              products[productIndex].timer;
            let status = timeDelta < 0 ? "inPreparation" : "ready";
            // draft.products[productIndex].stockEntries.push({
            //   id: Math.random(),
            //   ...stockEntry,
            //   // timeDelta: -300,
            //   status: status,
            //   addValue: 1,
            // })
            draft.productsToManage[productIndex].stockEntries.push({
              id: Math.random(),
              // timeDelta: -300,
              ...stockEntry,
              status: status,
              addValue: 1,
            });
          }
        } else {
          // draft.products[productIndex].stockEntries.push({
          //   id: Math.random(),
          //   stockEntry,
          // })
          draft.productsToManage[productIndex].stockEntries.push({
            id: Math.random(),
            ...stockEntry,
          });
        }
        draft.productToDisplayOnRightSidebar = productToDisplay;
      });
    }
    case "UPDATE_VALUE_TO_ADD": {
      return produce(state, (draft) => {
        const products = original(draft.productsToManage);
        const productIndex = products.findIndex(
          (product) => product.id === action.id
        );
        draft.productsToManage[productIndex].currentQuantity =
          action.currentValue;
      });
    }
    case "SHOW_PRODUCT_ON_RIGHTSIDEBAR": {
      return produce(state, (draft) => {
        const products = original(draft.productsToManage);
        const time = Date.now();
        const timeNow = new Date(time);
        const productIndex = products.findIndex(
          (product) => product.id === action.id
        );
        const productToDisplay = products[productIndex];
        draft.productToDisplayOnRightSidebar = productToDisplay;
        draft.rightsidebarViewOpenTime = timeNow.toISOString();
      });
    }
    case "CHANGE_PREPARATION_TIME": {
      return produce(state, (draft) => {
        const products = original(draft.productsToManage);
        const productIndex = products.findIndex(
          (product) => product.id === action.payload.id
        );
        const newDefaultTime = {
          minutes: action.payload.minutes === "" ? "0" : action.payload.minutes,
          seconds: action.payload.seconds === "" ? "0" : action.payload.seconds,
        };
        draft.productsToManage[productIndex].defaultTime = newDefaultTime;
        draft.productToDisplayOnRightSidebar.defaultTime = newDefaultTime;
      });
    }
    case "TIMER_TICK": {
      return produce(state, (draft) => {
        const products = original(draft.productsToManage);
        const productIndex = products.findIndex(
          (product) => product.id === action.payload.id
        );
        const productToDisplay = products[productIndex];
        const time = Date.now();
        const timeNow = new Date(time);
        draft.timer = timeNow.toISOString();
        let timer = state.timer;
        draft.productToDisplayOnRightSidebar.stockEntries.forEach(
          (entry, entryIndex) => {
            let timeDiff;
            // if (entry.preparationTime === 'inPreparation') {
            if (entry.preparationTime > 0) {
              timeDiff =
                Date.parse(timer) -
                Date.parse(entry.timeStamp) -
                entry.preparationTime * 1000;
            } else {
              timeDiff = Date.parse(timer) - Date.parse(entry.timeStamp);
            }
            let timeDelta = parseInt(timeDiff / 1000);
            draft.productToDisplayOnRightSidebar.stockEntries[
              entryIndex
            ].timeDelta = timeDelta;
            timeDelta > 0
              ? (draft.productToDisplayOnRightSidebar.stockEntries[
                  entryIndex
                ].status = "ready")
              : (draft.productToDisplayOnRightSidebar.stockEntries[
                  entryIndex
                ].status = "inPreparation");
          }
        );
        products.forEach((product, productIndex) => {
          if (product.stockEntries.length > 0) {
            let inPreparation = [];
            let ready = [];
            product.stockEntries.forEach((entry, entryIndex) => {
              if (entry.timeDelta < 0) {
                inPreparation.push(entry.addValue);
              } else {
                ready.push(entry.addValue);
              }

              let timeDiff = 0;
              // if (entry.status === 'inPreparation') {
              if (entry.preparationTime > 0) {
                timeDiff =
                  Date.parse(timer) -
                  Date.parse(entry.timeStamp) -
                  entry.preparationTime * 1000;
              } else {
                timeDiff = Date.parse(timer) - Date.parse(entry.timeStamp);
              }
              let timeDelta = parseInt(timeDiff / 1000);
              draft.productsToManage[productIndex].stockEntries[
                entryIndex
              ].timeDelta = timeDelta;
              entry.timeDelta < 0
                ? (draft.productsToManage[productIndex].stockEntries[
                    entryIndex
                  ].status = "inPreparation")
                : (draft.productsToManage[productIndex].stockEntries[
                    entryIndex
                  ].status = "ready");
            });
            draft.productsToManage[productIndex].inState.preparation =
              inPreparation.reduce((acc, curr) => acc + curr, 0);
            draft.productsToManage[productIndex].inState.ready = ready.reduce(
              (acc, curr) => acc + curr,
              0
            ) - state.productsToManage[productIndex].inState.locked;
          }
        });
        draft.productToDisplayOnRightSidebar = productToDisplay;
      });
    }
    case "PRODUCT_VIEW_LOAD_TIME": {
      return produce(state, (draft) => {
        const time = Date.now();
        const timeNow = new Date(time);
        draft.productViewOpenTime = timeNow.toISOString();
      });
    }
    case "CHANGE_STATUS": {
      return produce(state, (draft) => {
        const products = original(draft.productsToManage);
        let inPreparation = [];
        let ready = [];
        const productIndex = products.findIndex(
          (product) => product.id === action.id
        );

        products[productIndex].stockEntries.forEach((entry) => {
          entry.timeDelta > 0 || entry.timeDelta === null ? ready.push(entry) : inPreparation.push(entry);
        });
        draft.productsToManage[productIndex].inState.preparation =
          inPreparation.reduce((acc, curr) => acc + curr.addValue, 0);
        draft.productsToManage[productIndex].inState.ready = ready.reduce(
          (acc, curr) => acc + curr.addValue,
          0
        ) - state.productsToManage[productIndex].inState.locked;
        // draft.productToDisplayOnRightSidebar.inState.preparation =
        //   inPreparation.reduce((acc, curr) => acc + curr.addValue, 0)
        // draft.productToDisplayOnRightSidebar.inState.ready = ready.reduce(
        //   (acc, curr) => acc + curr.addValue,
        //   0
        // )
      });
    }
    case "UPDATE_STATE_RIGHTSIDEBAR": {
      return produce(state, (draft) => {
        const product = draft.productToDisplayOnRightSidebar;
        const viewOpenTime = new Date(draft.rightsidebarViewOpenTime);
        const inPreparation = [];
        const ready = [];
        const timer = new Date(product.timer);
        product.stockEntries.forEach((entry) => {
          const entryTime = new Date(entry.timeStamp);
          if (
            (viewOpenTime - entryTime) / 1000 < entry.preparationTime ||
            Date.parse(timer) - Date.parse(entryTime) >
              entry.preparationTime * 1000
          ) {
            inPreparation.push(entry);
          } else {
            ready.push(entry);
          }
        });
        // draft.productToDisplayOnRightSidebar.inState.preparation =
        //   inPreparation.reduce((acc, curr) => acc + curr.addValue, 0);
        // draft.productToDisplayOnRightSidebar.inState.ready = ready.reduce(
        //   (acc, curr) => acc + curr.addValue,
        //   0
        // );
      });
    }
    case "PREPARATION_READY": {
      return produce(state, (draft) => {
        const data = original(draft.productsToManage);
        const timer = state.timer;
        const product = draft.productToDisplayOnRightSidebar;
        const productIndex = data.findIndex(
          (product) => product.id === action.payload.productId
        );
        const entries = product.stockEntries;
        const entryIndex = entries.findIndex(
          (entry) => entry.id === action.payload.id
        );
        const parsedTimer = Date.parse(timer);
        const preparationTimeInMs = entries[entryIndex].preparationTime * 1000;
        const timeStamp = Date.parse(entries[entryIndex].timeStamp);
        const correctedTime = new Date(
          parsedTimer - timeStamp + preparationTimeInMs
        );

        draft.productsToManage[productIndex].stockEntries[
          entryIndex
        ].timeDelta = 0;
        draft.productsToManage[productIndex].stockEntries[
          entryIndex
        ].preparationTime = 0;
        draft.productsToManage[productIndex].stockEntries[
          entryIndex
        ].timeStamp = timer;
        draft.productToDisplayOnRightSidebar.stockEntries[
          entryIndex
        ].timeDelta = 0;
        draft.productsToManage[productIndex].stockEntries[entryIndex].status =
          "ready";
        draft.productToDisplayOnRightSidebar.stockEntries[entryIndex].status =
          "ready";
        // draft.productToDisplayOnRightSidebar.inState.preparation -=
        //   entries[entryIndex].addValue
        // draft.productsToManage[productIndex].stockEntries[
        //   entryIndex
        // ].timeDelta = correctedTime / 1000;
      });
    }
    case "STOCK_ENTRY_REMOVE": {
      return produce(state, (draft) => {
        const products = original(draft.productsToManage);
        const productIndex = products.findIndex(
          (product) => product.id === action.payload.productId
        );
        const product = draft.productToDisplayOnRightSidebar;
        const entries = product.stockEntries;
        // const entryIndex = entries.findIndex(
        //   (entry) => entry.id === action.payload.id
        // )
        const newEntries = entries.filter(
          (entry) => entry.id !== action.payload.id
        );
        draft.productToDisplayOnRightSidebar.stockEntries = newEntries;
        draft.productsToManage[productIndex].stockEntries = newEntries;
      });
    }
    case "LOCK_INGREDIENTS": {
      return produce(state, (draft) => {
        const products = state.productsToManage;
        const ingredientsToReserve = action.ingredientsToReserve[0];

        ingredientsToReserve.forEach((ingr) =>
          products.forEach((product, index) => {
            if (ingr.id === product.id) {
              if (product.inState.ready >= ingr.quantity) {
                draft.productsToManage[index].inState.locked += ingr.quantity;
                draft.productsToManage[index].inState.ready -= ingr.quantity;
              }
            }
          })
        );
      });
    }
    case "DESCENT_OF_INGREDIENTS": {
      return produce(state, (draft) => {
        const products = state.productsToManage;
        const mealGroups = action.mealGroups;
        // const orderIndex = action.orderIndex 
        const orders = action.orders
        let ingredientsToUnlock = []


        const descentIngrFromOrder = orders.filter(order => order.number === action.orderNo)
        // debugger
        descentIngrFromOrder.forEach(order => {
          order.orderItems.forEach(item => {
            mealGroups.forEach(group => {
              group.products.forEach(meal => {
                if (meal.index === item.index) {
                  ingredientsToUnlock.push(...meal.ingredients)
                }
              })
            })
          })

        }) 

        draft.ingredientsToUnlock = ingredientsToUnlock

        ingredientsToUnlock.forEach(ingr => {
          products.forEach((product, productIndex) => {
            if (ingr.id === product.id) {
              draft.productsToManage[productIndex].inState.locked -= ingr.quantity
              // debugger
              if (product.countable) {
                let stockEntries = state.productsToManage[productIndex].stockEntries
                let slicedStockEntries = stockEntries.slice(ingr.quantity)
                draft.productsToManage[productIndex].stockEntries = slicedStockEntries
              } else {
                draft.productsToManage[productIndex].stockEntries[0].addValue -= ingr.quantity
              }
              // debugger
            }
          })
        })


        // mealGroups.forEach((group) =>
        //   group.forEach((meal, index) => {

        //     if (ingr.id === product.id) {
        //       if (product.inState.ready >= ingr.quantity) {
        //         // debugger
        //         draft.productsToManage[index].inState.locked -= ingr.quantity;
        //         // draft.productsToManage[index].inState.ready -= ingr.quantity;
        //       }
        //     }
        //   })
        // );
      });
    }
    default:
      return state;
  }
};

export default productReducer;
