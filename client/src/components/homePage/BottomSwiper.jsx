import React from "react";
import { Swiper } from "@nutui/nutui-react-taro";

const list = [
  "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/B3.jpeg",
  "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/B5.jpg",
  "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/B4.jpg",
  "cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/B1.jpg",
];

export default function BottomSwiper() {
  const onChange = (e) => {
    console.log(`onChange is trigger ${e}`);
  };

  return (
    <Swiper
      defaultValue={1}
      autoPlay
      width={350}
      height={253}
      indicator
      onChange={onChange}
    >
      {list.map((item, index) => (
        <Swiper.Item key={item}>
          <img
            width="100%"
            height="100%"
            onClick={() => console.log(index)}
            src={item}
            alt=""
          />
        </Swiper.Item>
      ))}
    </Swiper>
  );
}
