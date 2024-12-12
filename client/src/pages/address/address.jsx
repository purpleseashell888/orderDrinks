import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Button, Form, Input, Radio, Cell } from "@nutui/nutui-react-taro";
import { ArrowRight } from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
import { useDispatch } from "react-redux"; // 引入 useDispatch
import { setFormData } from "../../redux/actions"; // 引入 action

import "./address.less";

export default function address() {
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  console.log(form);

  const handleChooseAddress = async () => {
    try {
      const res = await Taro.chooseAddress(); // 调用微信的chooseAddress API
      const fullAddress = `${res.cityName} ${res.countyName} ${res.detailInfo}`;
      setAddress(fullAddress); // 将选择的地址显示在表单项中

      // 更新表单中的 address 字段
      form.setFieldsValue({ address: fullAddress });
    } catch (error) {
      console.error("选择地址失败", error);
    }
  };

  const handleSubmit = (values) => {
    // 获取已有的地址列表
    const savedAddresses = Taro.getStorageSync("formData") || [];

    // 将新地址加入到地址列表中
    savedAddresses.push(values);

    // 使用 Taro.setStorageSync 保存数据到本地存储
    Taro.setStorageSync("formData", savedAddresses); // 保存表单数据到本地存储

    // 更新 Redux 数据
    dispatch(setFormData(savedAddresses));

    Taro.navigateTo({
      url: "/pages/delivery/delivery",
    });
  };

  return (
    <View className="container">
      <View className="formContainer">
        <Form
          form={form}
          labelPosition="right"
          onFinish={handleSubmit} // 使用 onFinish 来处理提交
          footer={
            <>
              <Button
                className="button"
                block
                type="default"
                // onClick={handleSubmit} // 点击提交时获取表单值
                nativeType="submit"
              >
                提交
              </Button>
            </>
          }
        >
          <Form.Item
            align="center"
            required
            label="联系人"
            name="username"
            rules={[
              { max: 5, message: "用于取餐时对您的称呼" },
              { required: true, message: "请输入联系人" },
            ]}
          >
            <Input
              className="nut-input-text"
              placeholder="用于取餐时对您的称呼"
              type="text"
            />
          </Form.Item>
          <Form.Item
            align="center"
            required
            label="性别"
            name="sex"
            rules={[
              // { max: 5, message: "字段B不能超过5个字" },
              { required: true, message: "请选择您的性别" },
            ]}
          >
            <Radio.Group direction="horizontal" className="radio">
              <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            align="center"
            required
            label="手机号"
            name="phone"
            rules={[
              { max: 15, message: "字段C不能超过15个字" },
              { required: true, message: "请输入您的手机号" },
            ]}
          >
            <Input
              className="nut-input-text"
              placeholder="请输入您的手机号"
              type="text"
            />
          </Form.Item>
          <Form.Item
            label="地址"
            name="address"
            required
            onClick={handleChooseAddress} // 点击时调用选择地址函数
          >
            <Cell
              style={{
                padding: 0,
                "--nutui-cell-divider-border-bottom": "0",
              }}
              className="nutui-cell--clickable"
              // title={"请选择地址"} // 显示选择的地址
              title={address || "请选择地址"} // 显示选择的地址
              extra={<ArrowRight />}
              align="center"
            />
          </Form.Item>
          <Form.Item
            label="门牌号"
            name="room"
            rules={[
              { max: 15, message: "字段D不能超过15个字" },
              { required: true, message: "请输入门牌号" },
            ]}
          >
            <Input
              className="nut-input-text"
              placeholder="请输入您的门牌号"
              type="text"
            />
          </Form.Item>
        </Form>
      </View>
    </View>
  );
}
