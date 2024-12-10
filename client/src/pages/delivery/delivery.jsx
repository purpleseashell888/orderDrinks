import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

import "./delivery.less";

export default function delivery() {
  const [formData, setFormData] = useState(null);

  const goToAddress = () => {
    Taro.navigateTo({ url: "/pages/address/address" });
  };

  useEffect(() => {
    // 获取当前页面栈
    const pages = Taro.getCurrentPages();
    const currentPage = pages[pages.length - 1]; // 当前页面是 delivery 页面
    const params = currentPage.options;

    if (params.formData) {
      // 解码并解析传递的 JSON 数据
      const data = JSON.parse(decodeURIComponent(params.formData));
      setFormData(data);
    }
  }, []);

  // 回调函数，用于接收 form 数据
  // const handleFormData = (data) => {
  //   console.log("Received data:", data);
  //   setFormData(data);
  // };

  return (
    <View className="container">
      {formData && (
        <View className="formContainer">
          <View>我的收货地址</View>
          <View>{formData.address}</View>
          <Text>联系人: {formData.username}</Text>
          <Text>手机号: {formData.phone}</Text>
        </View>
      )}
      <View className="add" onClick={() => goToAddress()}>
        新增收货地址
      </View>
    </View>
  );
}
