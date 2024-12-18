import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import { Button, Image } from "@nutui/nutui-react-taro";
import { Plus, Minus } from "@nutui/icons-react-taro";
import { useDispatch, useSelector } from "react-redux";
import { addItem, reduceItem } from "../../redux/actions"; // 引入 Redux action
import Taro from "@tarojs/taro";

import "./BagItem.less";

export default function BagItem({ url, name, price, id }) {
  const dispatch = useDispatch();

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

  const handleAdd = () => {
    const item = {
      id,
      url,
      name,
      price,
      quantity,
    };

    // 先更新 Redux 状态
    dispatch(addItem(item));

    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    // 使用 Taro.getStorageSync 代替 localStorage
    let localCart = Taro.getStorageSync("cart") || [];
    const existingItemIndex = localCart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      localCart[existingItemIndex].quantity += 1;
    } else {
      localCart.push(item);
    }
    Taro.setStorageSync("cart", localCart);
  };

  const handleReduce = () => {
    if (quantity > 0) {
      const item = {
        id,
        url,
        name,
        price,
        quantity,
      };

      // 先更新 Redux 状态
      dispatch(reduceItem(item));

      const newQuantity = quantity - 1;

      // 更新本地数量
      setQuantity(newQuantity);

      // 使用 Taro.getStorageSync 代替 localStorage
      let localCart = Taro.getStorageSync("cart") || [];
      const existingItemIndex = localCart.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        localCart[existingItemIndex].quantity -= 1;
        // 如果数量为 0，移除商品
        if (localCart[existingItemIndex].quantity === 0) {
          localCart.splice(existingItemIndex, 1);
        }
      }
      Taro.setStorageSync("cart", localCart);
    }
  };

  return (
    <View className="card">
      <Image className="img" width={80} height={80} src={url} alt="home" />
      <View className="text">
        <View className="name">{name}</View>
        <View className="price">&yen; {price}</View>
      </View>
      <View className="button">
        <Button
          type="default"
          icon={<Minus size="20" />}
          style={{ margin: 8 }}
          onClick={handleReduce}
        />
        <View className="itemNumber">{quantity}</View>
        <Button
          color="#6ba74d"
          type="primary"
          icon={<Plus size="20" />}
          style={{ margin: 8 }}
          onClick={handleAdd}
        />
      </View>
    </View>
  );
}
