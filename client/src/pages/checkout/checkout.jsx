import { View, Text, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import { Checkbox, Image, TextArea } from "@nutui/nutui-react-taro";
import { useSelector } from "react-redux"; // 引入 useSelector
import Taro from "@tarojs/taro";

import "./checkout.less";

export default function checkout() {
  const [activeBox, setActiveBox] = useState(1);
  const [checkBox, setCheckBox] = useState(1);
  const [checked1, setCheck1] = useState(true);
  const [checked2, setCheck2] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [showWays, setShowWays] = useState(true);

  const [notes, setNotes] = useState("");

  const [formData, setFormDataState] = useState(null); // 用于存储从 localStorage 中获取的 formData

  // 在 checkout 页面中确保从 Redux 获取最新的 formData
  const formDataFromRedux = useSelector((state) => state.formData);

  useEffect(() => {
    if (activeBox === 2) {
      // 当 showWays 为 false 时，从 localStorage 获取 formData 数据
      const savedFormData =
        formDataFromRedux || Taro.getStorageSync("formData");
      console.log("saved formData:", savedFormData); // 查看存储的 formData 数据

      if (savedFormData) {
        if (Array.isArray(savedFormData) && savedFormData.length > 0) {
          // 如果是数组且不为空，取第一个地址
          setFormDataState(savedFormData[0]);
        } else if (typeof savedFormData === "object") {
          // 如果是对象，直接使用该对象
          setFormDataState(savedFormData);
        }
      }
    } else if (activeBox === 1) {
      // 当 showWays 为 true 时，将 formData 设置为 null
      setFormDataState(null);
    }
  }, [activeBox, formDataFromRedux]);

  useEffect(() => {
    // 获取跳转时传递的 activeBox 参数
    const params = Taro.getCurrentInstance().router.params;
    const activeBoxFromParams = params.activeBox
      ? parseInt(params.activeBox)
      : 1; // 默认为 1（自提）

    // 设置 activeBox
    setActiveBox(activeBoxFromParams);
    setShowWays(false);
  }, []);

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

  // 点击地址跳转到 delivery 页面
  const handleAddressClick = () => {
    Taro.navigateTo({ url: "/pages/delivery/delivery" });
  };

  return (
    <View className="container">
      <View className="position">
        <View className="top">
          <View className="shop" onClick={handleAddressClick}>
            {/* 如果 formData 存在，则显示 formData 中的地址 */}
            {formData && formData.address
              ? `${formData.address.slice(0, 15)}...`
              : "樱花街店（No.12345）"}
          </View>
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
        <View className="street">
          {formData ? (
            <>
              <Text className="username"> {formData.username}</Text>
              <Text> {formData.phone}</Text>
            </>
          ) : (
            <View>徐汇区樱花街广场26号</View>
          )}
        </View>
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
