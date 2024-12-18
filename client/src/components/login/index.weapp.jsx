import React from "react";
import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

export default class Index extends Component {
  state = {
    context: {},
  };

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {},
      })
      .then((res) => {
        this.setState({
          context: res.result,
        });
      });
  };

  render() {
    return (
      <View className="index">
        <Button onClick={this.getLogin}>获取登录云函数</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    );
  }
}
