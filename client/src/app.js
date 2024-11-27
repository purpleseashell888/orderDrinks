import Taro from "@tarojs/taro";

import "./app.less";
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init();
    }
  }, []);

  // this.props.children 是将要会渲染的页面
  return props.children;
}

export default App;
