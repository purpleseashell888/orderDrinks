import React, { useMemo } from "react";
import { View, Text, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import { Checkbox, Image, TextArea } from "@nutui/nutui-react-taro";
import { useSelector, useDispatch } from "react-redux"; // 引入 useSelector
import Taro from "@tarojs/taro";
import CheckList from "../../components/checkout/CheckList";
import { setOrder, clearCart } from "../../redux/actions"; // 引入清空购物车的 action

import "./checkout.less";

export default function checkout() {
  const [activeBox, setActiveBox] = useState(1);
  const [checkBox, setCheckBox] = useState(1);
  const [checked1, setCheck1] = useState(true);
  const [checked2, setCheck2] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [showWays, setShowWays] = useState(true);

  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [notes, setNotes] = useState("");

  const [formData, setFormDataState] = useState(null); // 用于存储从 localStorage 中获取的 formData

  // 在 checkout 页面中确保从 Redux 获取最新的 formData
  const formDataFromRedux = useSelector((state) => state.formData);

  const dispatch = useDispatch();

  // cart
  const cart = useSelector((state) => {
    if (!state.myReducer) {
      console.error("myReducer not found in state");
      return [];
    }

    return state.myReducer.cart || []; // 确保返回 cart 或空数组
  });

  // const order = useSelector((state) => {
  //   if (!state.myReducer) {
  //     console.error("myReducer not found in state");
  //     return [];
  //   }

  //   return state.myReducer.order || [];
  // });

  useEffect(() => {
    if (formData) {
      const formAddress = `${formData.address.slice(0, 15)}...`;
      setAddress(formAddress);
      setUserName(formData.username);
      setUserPhone(formData.phone);
    } else {
      setAddress("樱花街店（No.12345）");
      setUserName("徐汇区樱花街广场26号");
      setUserPhone("");
    }
  }, [formData]); // 依赖于 formData，只有在 formData 改变时重新执行

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

  // 处理确定按钮点击事件
  const handleConfirm = () => {
    // 在这里执行你需要的操作，例如保存到后端等

    // 关闭弹出框
    setIsVisible(false);
  };

  const handleCancel = () => {
    setNotes("");
    setIsVisible(false);
  };

  const orderId = useSelector((state) => state.myReducer.orderId);

  const handleOrder = () => {
    const order = {
      items: cart.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      orderId: orderId,
      notes: notes, // 备注
      totalPrice: totalPrice,
      status: "待取餐",
    };

    // 使用 dispatch 发送到 Redux
    dispatch(setOrder(order));

    dispatch(clearCart());

    Taro.switchTab({
      url: "/pages/sales/sales",
    });
  };

  const goToDelivery = () => {
    Taro.navigateTo({ url: "/pages/delivery/delivery" });
  };

  // 点击地址跳转到 delivery 页面
  const handleAddressClick = () => {
    Taro.navigateTo({ url: "/pages/delivery/delivery" });
  };

  const { totalQuantity, totalPrice } = useMemo(() => {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totalPrice =
      Math.round(
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
      ) / 100;

    return { totalQuantity, totalPrice };
  }, [cart]); // 仅当 cart 改变时才重新计算

  return (
    <View className="container">
      <View className="innerContainer">
        <View className="position">
          <View className="top">
            <View className="shop" onClick={handleAddressClick}>
              {address}

              {/* 如果 formData 存在，则显示 formData 中的地址
              {formData && formData.address
                ? `${formData.address.slice(0, 15)}...`
                : "樱花街店（No.12345）"} */}
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
            <Text className="username">{userName}</Text>
            <Text> {userPhone}</Text>
            {/* {formData ? (
              <>
                <Text className="username"> {formData.username}</Text>
                <Text> {formData.phone}</Text>
              </>
            ) : (
              <View>徐汇区樱花街广场26号</View>
            )} */}
          </View>
        </View>
        <View className="drink">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CheckList
                key={item.id}
                id={item.id}
                url={item.url}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <Text>购物车为空</Text>
          )}
          <View className="checkBottom">
            <View>应付</View>
            <View className="priceColor">&yen; {totalPrice}</View>
          </View>
        </View>
        <View className="get">
          {/* {showWays && (
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
          )} */}
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
              value={notes} // 将 notes 状态绑定到 value
              onInput={(e) => {
                setNotes(e.detail.value);
              }}
            />
            <View className="buttonBelow">
              <Button className="btn1" onClick={handleConfirm}>
                确定
              </Button>
              <Button className="btn2" onClick={handleCancel}>
                取消
              </Button>
            </View>
          </View>
        )}
      </View>

      <View className="checkout">
        <View className="bottom">
          应付 <Text className="total">&yen; {totalPrice}</Text>
        </View>
        <Button className="button" onClick={handleOrder}>
          确认订单
        </Button>
      </View>
    </View>
  );
}
