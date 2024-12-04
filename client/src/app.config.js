export default {
  pages: [
    "pages/index/index",
    "pages/home/home",
    "pages/order/order",
    "pages/activity/activity",
    "pages/sales/sales",
    "pages/profile/profile",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    // navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#9c9590", // 未选中时的图标和文字颜色
    selectedColor: "#dba853", // 选中时的图标和文字颜色
    backgroundColor: "#fff", // tabBar 背景颜色
    position: "bottom",
    list: [
      {
        pagePath: "pages/home/home",
        text: "首页",
        iconPath: "assets/icons/home.png",
        selectedIconPath: "assets/icons/home1.png",
      },
      {
        pagePath: "pages/order/order",
        text: "点单",
        iconPath: "assets/icons/cup.png",
        selectedIconPath: "assets/icons/cup1.png",
      },
      {
        pagePath: "pages/activity/activity",
        text: "活动",
        iconPath: "assets/icons/gift.png",
        selectedIconPath: "assets/icons/gift1.png",
      },
      {
        pagePath: "pages/sales/sales",
        text: "订单",
        iconPath: "assets/icons/bag.png",
        selectedIconPath: "assets/icons/bag1.png",
      },
      {
        pagePath: "pages/profile/profile",
        text: "我的",
        iconPath: "assets/icons/avatar.png",
        selectedIconPath: "assets/icons/avatar1.png",
      },
    ],
  },
  cloud: true,
};
