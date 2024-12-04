import React from "react";
import { View, Text } from "@tarojs/components";
import { Button, Image } from "@nutui/nutui-react-taro";
import { Plus } from "@nutui/icons-react-taro";
import "./Item.less";

export default function Item({ url, name, price }) {
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
        />
      </View>
    </View>
  );
}
