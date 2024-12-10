import { View, Button, Image, Text } from "@tarojs/components";
// import { Cup } from "../../assets/icons/cup.png";
import {
  ShoppingAdd,
  Cart,
  Shop,
  UserAdd,
  Star,
  Voucher,
} from "@nutui/icons-react-taro";
import "./home.less";
import BottomSwiper from "../../components/homePage/BottomSwiper";
import Taro from "@tarojs/taro";

export default function home() {
  const goToOrder = () => {
    Taro.switchTab({ url: "/pages/order/order" });
  };

  const goToActivity = () => {
    Taro.switchTab({ url: "/pages/activity/activity" });
  };

  return (
    <View class="container">
      <View class="top">
        <View class="box1">
          <View class="left" onClick={goToOrder}>
            <ShoppingAdd color="#dba853" size={60} />
            <View class="title">门店自取</View>
            <View class="description">提前点单免排队</View>
          </View>
          <View class="right" onClick={goToActivity}>
            <Shop color="#dba853" size={60} />
            <View class="title">到店购买</View>
            <View class="description">囤咖啡买周边</View>
          </View>
        </View>
        <View class="box2">
          <View class="item">
            <Shop color="#dba853" size={40} />
            <View class="title1">积分商城</View>
            <View class="description1">兑换有礼</View>
          </View>
          <View class="item">
            <Voucher color="#dba853" size={40} />
            <View class="title1">优惠福利</View>
            <View class="description1">免费畅饮</View>
          </View>
          <View class="item">
            <Star color="#dba853" size={40} />
            <View class="title1">会员专享</View>
            <View class="description1">好茶做福利</View>
          </View>
          <View class="item">
            <UserAdd color="#dba853" size={40} />
            <View class="title1">邀请有礼</View>
            <View class="description1">本单立减</View>
          </View>
        </View>
        <View class="box3">
          <View class="item11">
            <View>Hi，微信用户</View>
            <View class="processContainer">
              <View class="processBar"></View>
            </View>
          </View>
          <View class="item1">
            <View>优惠券</View>
            <View class="description2">0 张</View>
          </View>
          <View class="item1">
            <View>积分</View>
            <View class="description2">0 个</View>
          </View>
        </View>
        <View class="box4">
          <BottomSwiper />
        </View>
      </View>
      <View class="imgContainer">
        <Image
          class="img"
          src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/top.jpeg"
          alt="top"
        />
      </View>
    </View>
  );
}
