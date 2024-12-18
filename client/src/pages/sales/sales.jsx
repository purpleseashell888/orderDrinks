import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Image, Tabs } from "@nutui/nutui-react-taro";
import SaleCard from "../../components/sales/SaleCard";
import { useSelector, useDispatch } from "react-redux"; // 引入 useSelector
import { updateOrderStatus, deleteOrder } from "../../redux/actions";
import CompletedCard from "../../components/sales/CompletedCard";

import "./sales.less";

export default function sales() {
  const [tab5value, setTab5value] = useState("0");

  const dispatch = useDispatch();

  const order = useSelector((state) => {
    if (!state.myReducer) {
      console.error("myReducer not found in state");
      return [];
    }

    return state.myReducer.order || [];
  });

  const pendingOrders = order.filter((item) => item.status === "待取餐");
  const completedOrders = order.filter((item) => item.status === "已完成");
  const canceledOrders = order.filter((item) => item.status === "已取消");

  // 点击已收货按钮时更新订单状态
  const handleReceive = (orderId) => {
    dispatch(updateOrderStatus(orderId, "已完成"));
  };

  const handleCancel = (orderId) => {
    dispatch(updateOrderStatus(orderId, "已取消"));
  };

  const handleDelete = (orderId) => {
    dispatch(updateOrderStatus(orderId, "已取消"));
    dispatch(deleteOrder(orderId));
  };

  const list5 = [
    {
      key: 0,
      title: "待取餐",
      content: (
        <View className="saleCard">
          {pendingOrders.length > 0 ? (
            pendingOrders.map((order, index) => (
              <SaleCard
                key={index}
                orderId={order.orderId}
                notes={order.notes}
                totalPrice={order.totalPrice}
                items={order.items}
                onReceive={() => handleReceive(order.orderId)}
                onCancel={() => handleCancel(order.orderId)}
              />
            ))
          ) : (
            <View>没有内容</View>
          )}
        </View>
      ),
    },
    {
      key: 1,
      title: "已完成",
      content: (
        <View className="saleCard">
          {completedOrders.length > 0 ? (
            completedOrders.map((order) => (
              <CompletedCard
                key={order.orderId}
                orderId={order.orderId}
                items={order.items}
                notes={order.notes}
                totalPrice={order.totalPrice}
                status={order.status}
                onDelete={() => handleDelete(order.orderId)}
              />
            ))
          ) : (
            <View>没有已完成订单</View>
          )}
        </View>
      ),
    },
    {
      key: 2,
      title: "已取消",
      content: (
        <View className="saleCard">
          {canceledOrders.length > 0 ? (
            canceledOrders.map((order) => (
              <CompletedCard
                key={order.orderId}
                orderId={order.orderId}
                items={order.items}
                notes={order.notes}
                totalPrice={order.totalPrice}
                status={order.status}
                onDelete={() => handleDelete(order.orderId)}
              />
            ))
          ) : (
            <View>没有已取消订单</View>
          )}
        </View>
      ),
    },
  ];

  return (
    <View className="tabsPage">
      <Tabs
        style={{
          // height: "100vh",
          "--nutui-tabs-titles-height": "60px",
          "--nutui-tabs-tab-line-width": "130px",
        }}
        value={tab5value}
        onChange={(value) => {
          setTab5value(value);
        }}
        activeType="line"
        activeColor="#627e0f"
      >
        {list5.map((item) => (
          <Tabs.TabPane key={item.key} title={item.title} className="tabPane">
            {item.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </View>
  );
}
