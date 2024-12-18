import React from "react";
import { View, Text, Button } from "@tarojs/components";
import { Divider } from "@nutui/nutui-react-taro";

import "./SaleCard.less";

export default function CompletedCard({
  notes,
  totalPrice,
  items,
  orderId,
  onDelete,
}) {
  return (
    <View className="container">
      订单编号：{orderId}
      <Divider />
      <View className="content">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <View key={index}>
              {item.name}
              <View className="right">
                <Text className="quantity">x {item.quantity}</Text>
                <Text className="orange">&yen;{item.price}</Text>
              </View>
              <Divider />
            </View>
          ))
        ) : (
          <View>没有 SaleCard 内容</View>
        )}
        <View className="right">
          总价：<Text className="orange">&yen;{totalPrice}</Text>
        </View>
      </View>
      <Divider />
      <View>备注：{notes ? notes : "无"}</View>
      <Divider />
      <View>下单时间：</View>
      <Divider />
      <View className="buttonContainer">
        <Button size="mini" className="cancel" onClick={onDelete}>
          删除订单
        </Button>
      </View>
    </View>
  );
}
