import Taro from "@tarojs/taro";
import { useEffect } from "react";
import { Provider } from "react-redux"; // 引入 Provider
import store from "./redux/store"; // 引入 Redux store

import "./app.less";

function App(props) {
  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init();
    }
  }, []);

  // this.props.children 是将要会渲染的页面
  return (
    <Provider store={store}>
      {props.children} {/* 渲染子页面 */}
    </Provider>
  );
}

export default App;
