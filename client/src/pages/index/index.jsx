import React from "react";
import Taro from "@tarojs/taro";
import { View, Button, Image } from "@tarojs/components";
import { AngleDoubleRight } from "@nutui/icons-react-taro";
import "./index.less";

// import Login from "../../components/login/index";

export default function Index() {
  const goHome = () => {
    Taro.switchTab({
      url: "/pages/home/home",
    });
  };

  return (
    <View class="container">
      <Image
        class="img"
        src="cloud://drinks-8g5btdumdc777667.6472-drinks-8g5btdumdc777667-1332247276/orderDrinks/home.jpeg"
        alt="home"
      />
      <Button class="button" onClick={goHome}>
        进入
        <AngleDoubleRight className="icon" size={25} />
      </Button>
    </View>
  );
}

// function transform(BackendUser){
//   const cell = {
//    let value =  BackendUser.id,
//    let label = BackendUser.name
//   }
//  const FrontUser = []
// if BackendUser.disabled === true {
//   result.push(cell)
// }
// return FrontUser
// }

// const MyComponent = () => {
//   function useCount() {
//     const [count, setCount] = useState();

//     function increase() {
//       useEffect(() => {
//         setCount(count + 1);
//       }, []);
//     }
//     return { count, increase };
//   }

//   const { count, increase } = useCount();

//   return (
//     <>
//       <span>{count}</span>
//       <button onClick={increase}>+1</button>
//     </>
//   );
// };
// function confirm() {
//   const result = new Promise((resolve) => {
//     Modal.confirm({

//       onOk() {
//         resolve(true); // 确认操作
//       },
//       onCancel() {
//         resolve(false); // 取消操作
//       },
//     });
//   });
//   return result
// }

// // 示例：使用 async/await 调用
// async function exampleUsage() {
//   if (await confirm({ title: '警告', content: '删除后数据不可恢复，是否继续？' })) {
//     console.log('确认操作');
//     // 执行确认逻辑
//   } else {
//     console.log('取消操作');
//     // 执行取消逻辑
//   }
// }

// exampleUsage();
