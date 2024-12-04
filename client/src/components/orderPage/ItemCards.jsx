import React from "react";
import { Card } from "@nutui/nutui-react-taro";
import "./ItemCards.less";

export default function ItemCards() {
  const state = {
    src: "//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg",
    title:
      "【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水",
    price: "388",
    vipPrice: "378",
  };

  return (
    <Card
      src={state.src}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      extra={<div style={{ fontSize: "12px" }}>自定义</div>}
    />
  );
}
