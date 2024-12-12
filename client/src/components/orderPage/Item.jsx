import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import { Button, Image } from "@nutui/nutui-react-taro";
import { Plus } from "@nutui/icons-react-taro";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions"; // 引入 Redux action
import Taro from "@tarojs/taro";

import "./Item.less";

export default function Item({ url, name, price, id }) {
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
    }
  }, [cart, id]); // 监听 cart 的变化

  const handleAdd = () => {
    const newQuantity = quantity + 1;

    setQuantity(newQuantity);

    const item = {
      id,
      url,
      name,
      price,
      quantity: newQuantity,
    };

    console.log("dispatching addItem action", item); // Debugging line

    console.log("Item:", { id, name, price, quantity }); // 调试信息

    // 先更新 Redux 状态
    dispatch(addItem(item));

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

  return (
    <View className="card">
      <Image className="img" width={80} height={80} src={url} alt="home" />
      <View className="text">
        <View className="name">{name}</View>
        <View className="price">&yen; {price}</View>
      </View>
      <View className="button">
        <Button
          color="#6ba74d"
          type="primary"
          icon={<Plus size="23" />}
          style={{ margin: 8 }}
          onClick={handleAdd}
        />
        {quantity > 0 && <View className="itemCircle">{quantity}</View>}
      </View>
    </View>
  );
}
