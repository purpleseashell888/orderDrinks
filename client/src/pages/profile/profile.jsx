import { View, Button, Image } from "@tarojs/components";
import {
  ShoppingAdd,
  Cart,
  Shop,
  UserAdd,
  Headphones,
  Voucher,
  Gift,
  Agenda,
} from "@nutui/icons-react-taro";

import "./profile.less";
import MiddleSwiper from "../../components/profile/middleSwiper";

export default function profile() {
  return (
    <View className="container">
      <View className="backgroundContainer">
        <Image
          class="background"
          src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/background3.jpg"
          alt="top"
        />
      </View>
      <View className="top">
        <View className="card">
          <View className="up">
            <View className="left">
              <Image
                className="cat"
                src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/cat.jpg"
                alt="cat"
              />
            </View>
            <View className="right">
              <View className="box1">
                <View className="name">Hi, 微信用户</View>
                <View>
                  <Button size="mini" className="button">
                    Lv 1
                  </Button>
                </View>
              </View>
              <View className="box2">
                <View className="box2Left">
                  <View className="number">0</View>积分
                </View>
                <View className="box2Right">
                  <View className="number">0</View>优惠券
                </View>
              </View>
            </View>
          </View>
          <View className="down">
            <View className="word">当前经验值 20/150</View>
            <View className="processContainer">
              <View class="processBar"></View>
            </View>
          </View>
        </View>
        <View className="member">
          <View className="title">会员权益</View>
          <View className="power">
            <View className="content">
              <Shop color="#dba853" size={40} />
              <View className="title1">堂食8折</View>
              <View className="title2">周一会员日</View>
            </View>
            <View className="content">
              <Voucher color="#dba853" size={40} />
              <View className="title1">购买卡券</View>
              <View className="title2">满30减10</View>
            </View>
            <View className="content">
              <ShoppingAdd color="#dba853" size={40} />
              <View className="title1">外卖到家</View>
              <View className="title2">在家享用</View>
            </View>
            <View className="content">
              <Gift color="#dba853" size={40} />
              <View className="title1">优惠活动</View>
              <View className="title2">满减优惠</View>
            </View>
          </View>
        </View>
        <View className="img">
          <MiddleSwiper />
        </View>
        <View className="function">
          <View className="title">我的功能</View>
          <View className="row">
            <View className="content">
              <Agenda color="#dba853" size={40} />
              <View>完善资料</View>
            </View>
            <View className="content">
              <Voucher color="#dba853" size={40} />
              <View>福利社群</View>
            </View>
            <View className="content">
              <Headphones color="#dba853" size={40} />
              <View>客服咨询</View>
            </View>
            <View className="content">
              <Cart color="#dba853" size={40} />
              <View>团队订餐</View>
            </View>
          </View>
          <View className="row">
            <View className="content">
              <Agenda color="#dba853" size={40} />
              <View>完善资料</View>
            </View>
            <View className="content">
              <Voucher color="#dba853" size={40} />
              <View>福利社区</View>
            </View>
            <View className="content">
              <Headphones color="#dba853" size={40} />
              <View>客服咨询</View>
            </View>
            <View className="content">
              <Cart color="#dba853" size={40} />
              <View>团队订餐</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
