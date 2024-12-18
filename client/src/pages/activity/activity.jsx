import React, { useState } from "react";
import { View, Button, Image } from "@tarojs/components";
import { Swiper } from "@nutui/nutui-react-taro";
import ActivityCard from "../../components/activity/ActivityCard";
import "./activity.less";

export default function activity() {
  const list = [
    {
      icon: "/assets/icons/home1.png",
      title: "积分商城",
      text: "玩转会员积分",
    },
    {
      icon: "/assets/icons/cup1.png",
      title: "集杯有礼",
      text: "正价消费满5杯送一杯",
    },
    {
      icon: "/assets/icons/gift1.png",
      title: "周一会员日",
      text: "小程序8折优惠",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <View className="container">
      <View className="imgContainer">
        <Image
          className="img"
          src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/background.jpg"
          alt="bg"
        />
      </View>
      <View className="swiper">
        <Swiper
          width={280}
          height={400}
          defaultValue={0}
          onChange={(e) => {
            setCurrent(e.detail.current);
          }}
          indicator={
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "117px",
                width: "46px",
                height: "22px",
                background: "rgba(0, 0, 0, 0.33)",
                borderRadius: "22px",
                textAlign: "center",
                color: "#fff",
                fontSize: "14px",
                zIndex: "2",
              }}
            >
              {current + 1}/{list.length}
            </div>
          }
          style={{ margin: "120px auto" }}
        >
          {list.map((item, index) => (
            <ActivityCard
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Swiper>
      </View>
    </View>
  );
}
