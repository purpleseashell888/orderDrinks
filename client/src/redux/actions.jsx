// 定义 action type 常量
export const SET_FORM_DATA = "SET_FORM_DATA";
export const ADD_ITEM = "ADD_ITEM";
export const REDUCE_ITEM = "REDUCE_ITEM";
export const SET_CART = "SET_CART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_ORDER = "SET_ORDER";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";
export const DELETE_ORDER = "DELETE_ORDER";

// 用来设置表单数据的 action
export const setFormData = (data) => ({
  type: SET_FORM_DATA,
  payload: data,
});

// 添加商品到购物车的 action
export const addItem = (item) => {
  return { type: ADD_ITEM, payload: item };
};

// 减少商品到购物车的 action
export const reduceItem = (item) => {
  return { type: REDUCE_ITEM, payload: item };
};

// 清空 cart
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

// 设置购物车的 action
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

export const setOrder = (item) => ({ type: SET_ORDER, payload: item });

export const updateOrderStatus = (orderId, status) => ({
  type: UPDATE_ORDER_STATUS,
  payload: { orderId, status },
});

export const deleteOrder = (orderId) => {
  return { type: DELETE_ORDER, payload: { orderId } };
};
