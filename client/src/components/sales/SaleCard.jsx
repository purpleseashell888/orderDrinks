import { View, Text, Button } from "@tarojs/components";
import { Divider } from "@nutui/nutui-react-taro";
import "./SaleCard.less";

export default function SaleCard() {
  return (
    <View className="container">
      订单编号：1
      <Divider />
      <View className="content">
        四季春+珍波椰
        <View className="right">
          <Text className="quantity">x1</Text>
          <Text className="orange">&yen;27.89</Text>
        </View>
        <Divider />
        <View className="right">
          总价：<Text className="orange">&yen;27.89</Text>
        </View>
      </View>
      <Divider />
      <View>备注：无</View>
      <Divider />
      <View>下单时间：</View>
      <Divider />
      <View className="buttonContainer">
        <Button size="small" className="button">
          取消订单
        </Button>
      </View>
    </View>
  );
}
