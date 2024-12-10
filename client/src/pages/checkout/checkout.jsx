import { View, Text, Button } from "@tarojs/components";
import { useState } from "react";
import { Checkbox, Image, TextArea } from "@nutui/nutui-react-taro";
import "./checkout.less";
import Taro from "@tarojs/taro";

export default function checkout() {
  const [activeBox, setActiveBox] = useState(1);
  const [checkBox, setCheckBox] = useState(1);
  const [checked1, setCheck1] = useState(true);
  const [checked2, setCheck2] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [showWays, setShowWays] = useState(true);

  const [notes, setNotes] = useState("");

  // 更新 check1 和 check2 的状态
  const handleCheckBoxChange = (box) => {
    if (box === 1) {
      setCheckBox(1);
      setCheck1(true);
      setCheck2(false);
    } else if (box === 2) {
      setCheckBox(2);
      setCheck1(false);
      setCheck2(true);
    }
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleCancel = () => {
    setNotes("");
    setIsVisible(false);
  };

  const goToDelivery = () => {
    Taro.navigateTo({ url: "/pages/delivery/delivery" });
  };

  return (
    <View className="container">
      <View className="position">
        <View className="top">
          <View className="shop"> 樱花街店（No.12345）&gt; </View>
          <View className="takeaway">
            <View
              className={`box1 ${activeBox === 1 ? "active" : ""}`}
              onClick={() => {
                setActiveBox(1);
                setShowWays(true);
              }}
            >
              自提
            </View>
            <View
              className={`box2 ${activeBox === 2 ? "active " : ""}`}
              onClick={() => {
                setActiveBox(2);
                goToDelivery();
                setShowWays(false);
              }}
            >
              外送
            </View>
          </View>
        </View>
        <View className="street">徐汇区樱花街广场26号</View>
      </View>
      <View className="drink">
        <View className="up">
          <View className="imgContainer">
            <Image
              width={100}
              height={100}
              className="img"
              src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/tea2.jpeg"
            />
          </View>
          <View className="description">
            <View className="left">生椰拿铁</View>
            <View className="right">
              <View className="price orange">&yen; 13.76</View>
              <View className="number">x 1</View>
            </View>
          </View>
        </View>
        <View className="down">
          应付<Text className="orange">&yen; 13.76</Text>
        </View>
      </View>
      <View className="get">
        {showWays && (
          <View className="ways">
            <View className="getWay">取餐方式</View>
            <View className="waysRight">
              <View className="way1" onClick={() => handleCheckBoxChange(1)}>
                <Checkbox
                  label="店内用餐"
                  checked={checked1}
                  className={`${checkBox === 1 ? "check" : ""}`}
                />
              </View>
              <View className="way2" onClick={() => handleCheckBoxChange(2)}>
                <Checkbox
                  label="自提带走"
                  checked={checked2}
                  className={`${checkBox === 2 ? "check" : ""}`}
                />
              </View>
            </View>
          </View>
        )}
        <View
          className="notes"
          onClick={() => {
            handleVisible();
          }}
        >
          <View>备注特殊要求</View>
          <View>&gt;</View>
        </View>
      </View>
      {isVisible && (
        <View className="noteArea">
          订单备注
          <TextArea
            type="text"
            placeholder="请输入备注"
            className="write"
            onChange={setNotes}
          />
          <View className="buttonBelow">
            <Button className="btn1">确定</Button>
            <Button className="btn2" onClick={() => handleCancel()}>
              取消
            </Button>
          </View>
        </View>
      )}
      <View className="checkout">
        <View className="bottom">
          应付 <Text className="total">&yen; 13.76</Text>
        </View>
        <Button className="button">确认订单</Button>
      </View>
    </View>
  );
}
