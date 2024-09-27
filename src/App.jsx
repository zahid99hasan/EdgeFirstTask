import FirstComponent from "./components/FirstComponent";
import Product from "./components/product";
function App() {

  // const array = ["Apple ","mango ", "PineApple"];
  // const student = {
  //   name: 'Zahid',
  //   roll:'1904099',
  //   emoji:'👌👍',
  //   fav_foods:["Biriyani", "Pizza", "Beef"],
  //   fav_color: "White",
  const products =[
    {
      product_id: 1,
      name:'bag',
      color:["Red","Green"]
    },
    {
      product_id: 2,
      name:'Drinks',
      color:["Maroon","Yellow"]  
    }

  ];

    
  return (
    <>
      {/* <FirstComponent studentInfo={student}/> */}
      <Product productInfo={products}/>
    </>
  );
  }

export default App
