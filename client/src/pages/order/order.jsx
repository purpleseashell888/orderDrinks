import { View, Text } from "@tarojs/components";
import React, { useState } from "react";
import { Image, Tabs } from "@nutui/nutui-react-taro";
import { Cart } from "@nutui/icons-react-taro";
import Item from "../../components/orderPage/Item";
import "./order.less";
import Taro from "@tarojs/taro";

const items = [
  {
    url: "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/tea.jpeg",
    name: "伯牙绝弦",
    id: 1,
    price: 12.47,
  },
  {
    url: "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/tea1.jpeg",
    name: "一杯茉莉花",
    id: 2,
    price: 13.12,
  },
  {
    url: "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/tea2.jpeg",
    name: "生椰拿铁",
    id: 3,
    price: 13.76,
  },
  {
    url: "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/tea8.jpg",
    name: "锡兰乳茶",
    id: 4,
    price: 11.41,
  },
  {
    url: "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/tea4.jpeg",
    name: "小黄油美式",
    id: 5,
    price: 14.18,
  },
  {
    url: "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/tea7.jpeg",
    name: "茉莉奶绿",
    id: 6,
    price: 10.98,
  },
  {
    url: "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/tea8.jpg",
    name: "芝芝莓莓",
    id: 7,
    price: 12.47,
  },
];

export default function order() {
  const [tab5value, setTab5value] = useState("0");

  const goToCheckout = () => {
    Taro.navigateTo({ url: "/pages/checkout/checkout" });
  };

  const list5 = [
    {
      key: 0,
      title: "人气Top",
      content: (
        <View>
          <Image
            className="img"
            width={250}
            height={130}
            src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/brand1.jpeg"
            alt="home"
          />
          {items.map((item, index) => (
            <Item url={item.url} name={item.name} price={item.price} />
          ))}
        </View>
      ),
    },
    {
      key: 1,
      title: "今日特价",
      content: (
        <View>
          <Image
            className="img"
            width={250}
            height={125}
            src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/brand2.jpg"
            alt="home"
          />
          {items.map((item, index) => (
            <Item url={item.url} name={item.name} price={item.price} />
          ))}
        </View>
      ),
    },
    {
      key: 2,
      title: "品牌精选",
      content: (
        <View>
          <Image
            className="img"
            width={250}
            height={125}
            src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/brand1.jpeg"
            alt="home"
          />
          {items.map((item, index) => (
            <Item url={item.url} name={item.name} price={item.price} />
          ))}
        </View>
      ),
    },
    {
      key: 3,
      title: "大师咖啡",
      content: (
        <View>
          <Image
            className="img"
            width={250}
            height={125}
            src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/B3.jpeg"
            alt="home"
          />
          {items.map((item, index) => (
            <Item url={item.url} name={item.name} price={item.price} />
          ))}
        </View>
      ),
    },
    {
      key: 4,
      title: "冬日暖咖",
      content: (
        <View>
          <Image
            className="img"
            width={250}
            height={125}
            src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/brand2.jpg"
            alt="home"
          />
          {items.map((item, index) => (
            <Item url={item.url} name={item.name} price={item.price} />
          ))}
        </View>
      ),
    },
  ];

  return (
    <View className="tabsPage">
      <Tabs
        style={{
          height: "100vh",
          "--nutui-tabs-vertical-titles-item-height": "60px",
          "--nutui-tabs-vertical-tab-line-height": "35px",
        }}
        value={tab5value}
        onChange={(value) => {
          setTab5value(value);
        }}
        direction="vertical"
        activeType="line"
        activeColor="#627e0f"
      >
        {list5.map((item) => (
          <Tabs.TabPane key={item.key} title={item.title}>
            {item.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <View className="shopping">
        <View className="bag">
          <Cart color="#dba853" size={30} className="cart" />
          <View className="bagContent">
            预计到手 <Text className="price">&yen; 13.76</Text>
          </View>
        </View>
        <View className="checkout" onClick={goToCheckout}>
          结 算
        </View>
      </View>
    </View>
  );
}
