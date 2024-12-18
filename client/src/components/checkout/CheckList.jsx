import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import { Button, Image } from "@nutui/nutui-react-taro";
import { useSelector } from "react-redux";
import Taro from "@tarojs/taro";

import "./CheckList.less";

export default function CheckList({ url, name, price, id }) {
  // 从 Redux store 获取购物车数据
  const cart = useSelector((state) => state.myReducer?.cart || []);

  // 根据 cart 中的 id 获取该商品的数量
  const itemInCart = cart.find((item) => item.id === id);
  const initialQuantity = itemInCart ? itemInCart.quantity : 0;

  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    // 更新本地 quantity 当 cart 变化时
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      setQuantity(itemInCart.quantity);
    } else {
      setQuantity(0); // 如果购物车里没有该商品，重置为 0
    }
  }, [cart, id]); // 监听 cart 的变化

  return (
    <View>
      <View className="checkCard">
        <Image
          className="checkImg"
          width={100}
          height={100}
          src={url}
          alt="home"
        />
        <View className="checkText">
          <View className="checkName">{name}</View>
          <View className="text">冰/不另外加糖</View>
        </View>
        <View className="checkNumber">
          <View className="checkPrice">&yen; {price}</View>
          <View className="itemNumber">x {quantity}</View>
        </View>
      </View>

      {/* <View className="checkBottom">
        <View>应付</View>
        <View className="priceColor">&yen; 111</View>
      </View> */}
    </View>
  );
}
