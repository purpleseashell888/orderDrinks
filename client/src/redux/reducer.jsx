import {
  SET_FORM_DATA,
  ADD_ITEM,
  REDUCE_ITEM,
  SET_CART,
  CLEAR_CART,
  SET_ORDER,
  UPDATE_ORDER_STATUS,
  DELETE_ORDER,
} from "./actions";

const initialState = {
  formData: {}, // 存储表单数据
  cart: [],
  order: [],
  orderId: 1,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload, // 保存表单数据
      };

    case SET_ORDER:
      // 将新订单添加到订单列表
      return {
        ...state,
        orderId: state.orderId + 1,
        order: [...state.order, action.payload],
      };

    case UPDATE_ORDER_STATUS:
      // 更新指定订单的状态
      const updatedOrder = state.order.map((order) =>
        order.orderId === action.payload.orderId
          ? { ...order, status: action.payload.status }
          : order
      );

      return {
        ...state,
        order: updatedOrder, // 返回更新后的订单列表
      };

    case ADD_ITEM:
      // console.log("Reducer received action", action);

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

    case REDUCE_ITEM:
      // console.log("Reducer received action", action);

      // 检查购物车中是否已经存在该商品
      const itemExistsReduce = state.cart.some(
        (item) => item.id === action.payload.id
      );

      let updatedCartReduce;

      if (itemExistsReduce) {
        // 如果商品已经存在，使用 map 遍历购物车，更新数量
        updatedCartReduce = state.cart
          .map((item) => {
            if (item.id === action.payload.id) {
              // 如果商品数量大于0，执行减法操作
              if (item.quantity > 1) {
                return {
                  ...item,
                  quantity: item.quantity - 1, // 减少数量
                };
              } else {
                // 如果商品数量为1或0，移除该商品
                return null; // 返回 null 表示要删除该商品
              }
            }
            return item; // 其他商品不变
          })
          .filter((item) => item !== null); // 过滤掉返回 null 的商品
      } else {
        // 如果商品不存在，不需要进行处理
        updatedCartReduce = state.cart;
      }

      return { ...state, cart: updatedCartReduce };

    case DELETE_ORDER:
      // 过滤出不匹配的订单，删除目标订单
      const updatedDelete = state.order.filter(
        (item) => item.orderId !== action.payload.orderId
      );

      return { ...state, order: updatedDelete };

    case SET_CART:
      return { ...state, cart: action.payload };

    case CLEAR_CART:
      return {
        ...state,
        cart: [], // 清空购物车
      };

    default:
      return state;
  }
};

export default myReducer;
