export const chooseGroup = (id, name) => {
  return {
    type: "CHOOSE_GROUP",
    id,
    name,
  };
};
export const checkMealAvailability = () => (dispatch, getState) => {
  const productsToManage = getState().productReducer.productsToManage;
  dispatch({
    type: "CHECK_MEAL_AVAILABILITY",
    productsToManage: productsToManage,
  });
};
export const chooseProduct = (index, itemName) => {
  return {
    type: "CHOOSE_PRODUCT",
    index,
    itemName,
  };
};
export const deleteOrderSummaryItem = (index, price) => (dispatch, getState) => {
  const productsToManage = getState().productReducer.productsToManage
  dispatch({
    type: "DELETE_ORDER_SUMMARY_ITEM",
    productsToManage: productsToManage,
    index,
    price,
  });
};
export const newOrderViewClearance = () => {
  return {
    type: "NEW_ORDER_VIEW_CLEARANCE",
  };
};
export const showOrderSummary = () => {
  return {
    type: "SHOW_ORDER_SUMMARY",
  };
};
// export const postNewOrder = (orderDetails) => {
//   return {
//     type: "POST_NEW_ORDER",
//     orderDetails,
//   };
// };
export const postNewOrder = (orderDetails) => (dispatch, getState) => {
  const productsToManage = getState().productReducer.productsToManage;
  dispatch({
    type: "POST_NEW_ORDER",
    productsToManage: productsToManage,
    orderDetails
  });
};
export const reserveProducts = () => (dispatch, getState) => {
  const productsToManage = getState().productReducer.productsToManage;
  dispatch({
    type: "RESERVE_PRODUCTS",
    productsToManage: productsToManage,
  });
};
export const checkIngrAvailability = (mealId, ingredients) => (dispatch, getState) => {
  const productsToManage = getState().productReducer.productsToManage;
  dispatch({
    type: "CHECK_INGR_AVAILABILITY",
    productsToManage: productsToManage,
    mealId: mealId,
    ingredients: ingredients
  });
};
export const newOrder = (orderDetails) => (dispatch, getState) => {
  const productsToManage = getState().productReducer.productsToManage;
  dispatch({
    type: "POST_NEW_ORDER",
    productsToManage: productsToManage,
    orderDetails
  });
  dispatch({
    type: "RESERVE_PRODUCTS",
    productsToManage: productsToManage,
  });
  // dispatch({
  //   type: "CHECK_INGR_AVAILABILITY",
  //   productsToManage: productsToManage,
  // });
};
