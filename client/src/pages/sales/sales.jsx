import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Image, Tabs } from "@nutui/nutui-react-taro";
import SaleCard from "../../components/sales/SaleCard";
import "./sales.less";

export default function sales() {
  const [tab5value, setTab5value] = useState("0");

  const list5 = [
    {
      key: 0,
      title: "待取餐",
      content: (
        <View className="saleCard">
          <SaleCard />
          <SaleCard />
        </View>
      ),
    },
    {
      key: 1,
      title: "已完成",
      content: (
        <View className="saleCard">
          <SaleCard />
        </View>
      ),
    },
    {
      key: 2,
      title: "已取消",
      content: (
        <View className="saleCard">
          <SaleCard />
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
