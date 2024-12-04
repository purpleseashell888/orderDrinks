import React from "react";
import { Divider } from "@nutui/nutui-react-taro";
import { View, Text, Button, Image } from "@tarojs/components";
import "./ActivityCard.less";

export default function ActivityCard({ icon, title, text }) {
  return (
    <View className="card">
      <View className="icon">
        <Image className="iconImg" src={icon} />
      </View>
      <View className="container">
        <Text className="title">{title}</Text>
        <Divider
          style={{
            width: "100px",
            height: "3px",
            borderColor: "#c0bab6",
            margin: "20px auto",
          }}
        />
        <Text className="content">{text}</Text>
        <Button className="button">立即参与</Button>
      </View>
    </View>
  );
}
