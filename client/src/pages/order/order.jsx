import { View, Text } from "@tarojs/components";
import React, { useMemo, useState } from "react";
import { Image, Tabs } from "@nutui/nutui-react-taro";
import { Cart, NoReceive } from "@nutui/icons-react-taro";
import Item from "../../components/orderPage/Item";
import Taro from "@tarojs/taro";
import { useSelector, useDispatch } from "react-redux";
import BagItem from "../../components/shoppingbag/bagItem";
import { clearCart } from "../../redux/actions"; // 引入清空购物车的 action

import "./order.less";

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
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const goToCheckout = () => {
    Taro.navigateTo({ url: "/pages/checkout/checkout" });
  };

  const cart = useSelector((state) => {
    if (!state.myReducer) {
      console.error("myReducer not found in state");
      return [];
    }

    return state.myReducer.cart || []; // 确保返回 cart 或空数组
  });

  const { totalQuantity, totalPrice } = useMemo(() => {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totalPrice =
      Math.round(
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
      ) / 100;

    return { totalQuantity, totalPrice };
  }, [cart]); // 仅当 cart 改变时才重新计算

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClearCart = () => {
    // 清空购物车
    dispatch(clearCart());

    setIsVisible(false); // 关闭购物车界面

    Taro.setStorageSync("cart", []); // 同步到本地存储
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
            <Item
              key={item.id}
              url={item.url}
              name={item.name}
              price={item.price}
              id={item.id}
            />
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
            <Item
              key={item.id}
              url={item.url}
              name={item.name}
              price={item.price}
              id={item.id}
            />
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
            <Item
              key={item.id}
              url={item.url}
              name={item.name}
              price={item.price}
              id={item.id}
            />
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
            <Item
              key={item.id}
              url={item.url}
              name={item.name}
              price={item.price}
              id={item.id}
            />
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
            <Item
              key={item.id}
              url={item.url}
              name={item.name}
              price={item.price}
              id={item.id}
            />
          ))}
        </View>
      ),
    },
  ];

  return (
    <View className="tabsPage">
      {/*遮罩层，当 isVisible 为 true 时显示*/}
      {isVisible && (
        <View
          className="overlay"
          onClick={handleClose} // 点击遮罩层时关闭
        />
      )}
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
      {totalQuantity > 0 ? (
        <View className="shopping">
          <View className="bag" onClick={handleOpen}>
            <Cart color="#dba853" size={30} className="cart" />
            <View className="circle">{totalQuantity}</View>
            <View className="bagContent">
              预计到手 <Text className="price">&yen; {totalPrice}</Text>
            </View>
          </View>
          <View className="checkout" onClick={goToCheckout}>
            结 算
          </View>
        </View>
      ) : (
        <View className="shoppingImage">
          <Cart color="#dba853" size={30} className="cart" />
        </View>
      )}
      {isVisible && (
        <View className="bottomCart">
          <View className="bottomTop">
            <View className="box1">已选购商品（{totalQuantity}件）</View>
            <View className="box2" onClick={handleClearCart}>
              <NoReceive
                color="#f14d3a"
                style={{ marginRight: "5px", marginTop: "2px" }}
              />
              清空购物车
            </View>
          </View>
          <View className="bottomList">
            {cart.length > 0 ? (
              cart.map((item) => (
                <BagItem
                  key={item.id} // 使用 item.id 作为 key
                  id={item.id}
                  url={item.url}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <Text>购物车为空</Text> // 如果 cart 为空，显示提示
            )}
          </View>
        </View>
      )}
    </View>
  );
}
