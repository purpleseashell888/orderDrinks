// 定义 action type 常量
export const SET_FORM_DATA = "SET_FORM_DATA";
export const ADD_ITEM = "ADD_ITEM";
export const SET_CART = "SET_CART";

// 用来设置表单数据的 action
export const setFormData = (data) => ({
  type: SET_FORM_DATA,
  payload: data,
});

// 添加商品到购物车的 action
export const addItem = (item) => {
  return { type: ADD_ITEM, payload: item };
};

// 设置购物车的 action
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});
