import React from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // 引入 useSelector
import { setFormData } from "../../redux/actions"; // 引入 action

import "./delivery.less";

export default function delivery() {
  const dispatch = useDispatch();

  // 获取 Redux 中的 formData
  const formDataFromRedux = useSelector((state) => state.formData);

  // 使用 state 来存储最终显示的数据
  const [formData, setFormDataState] = useState([]);

  useEffect(() => {
    // 先从 Redux 获取数据，如果没有再从 localStorage 获取
    const savedFormData = formDataFromRedux || Taro.getStorageSync("formData");

    console.log("Checking formData:", savedFormData); // 打印已获取的 formData

    if (savedFormData && savedFormData.length > 0) {
      setFormDataState(savedFormData); // 如果有地址列表，使用它
    }
  }, [formDataFromRedux]);

  const goToAddress = () => {
    Taro.navigateTo({ url: "/pages/address/address" });
  };

  // 删除地址
  const handleDelete = (index) => {
    // 删除指定索引的地址
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1); // 删除该条地址

    // 更新本地存储
    Taro.setStorageSync("formData", updatedFormData);

    // 更新 Redux 状态
    dispatch(setFormData(updatedFormData));

    // 更新组件 state
    setFormDataState(updatedFormData);
  };

  // 点击地址跳转到 delivery 页面
  const handleAddressClick = () => {
    Taro.navigateTo({ url: "/pages/checkout/checkout?activeBox=2" });
  };

  return (
    <View className="container">
      {formData.length > 0 ? (
        formData.map((item, index) => (
          <View
            key={index}
            className="formContainer"
            onClick={handleAddressClick}
          >
            <View className="title">我的收货地址</View>
            <View className="address">{item.address}</View>
            <View className="contact">
              <Text className="person">联系人: {item.username}</Text>
              <Text>手机号: {item.phone}</Text>
              <Button
                size="mini"
                className="button"
                onClick={() => handleDelete(index)}
              >
                删除
              </Button>
            </View>
          </View>
        ))
      ) : (
        <View className="emptyContainer">请选择您的地址</View>
      )}
      <View className="add" onClick={() => goToAddress()}>
        新增收货地址
      </View>
    </View>
  );
}
