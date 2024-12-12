import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./reducer"; // 导入你的 reducer

const store = configureStore({
  reducer: {
    myReducer, // 将 myReducer 作为对象中的一个属性
  },
});

export default store;
