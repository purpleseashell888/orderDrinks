import { SET_FORM_DATA, ADD_ITEM, SET_CART } from "./actions";

const initialState = {
  formData: {}, // 存储表单数据
  cart: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload, // 保存表单数据
      };

    case ADD_ITEM:
      console.log("Reducer received action", action);

      // 检查购物车中是否已经存在该商品
      const itemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );

      let updatedCart;

      if (itemExists) {
        // 如果商品已经存在，使用 map 遍历购物车，更新数量
        updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }; // 更新数量
          }
          return item; // 其他商品不变
        });
      } else {
        // 如果商品不存在，直接添加到购物车
        updatedCart = [...state.cart, action.payload];
      }

      return { ...state, cart: updatedCart };

    case SET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

export default myReducer;
