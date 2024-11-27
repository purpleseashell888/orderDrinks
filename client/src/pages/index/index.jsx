import React from "react";
import { View, Button, Image } from "@tarojs/components";
// import { AngleDoubleRight } from "@nutui/icons-react-taro";
import "./index.less";

import Login from "../../components/login/index";

export default function Index() {
  return (
    <View className="container">
      <Image
        class="img"
        src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/home.jpeg"
        alt="home"
      />
      <Button className="button">
        进入
        {/* <AngleDoubleRight /> */}
      </Button>
    </View>
  );
}
