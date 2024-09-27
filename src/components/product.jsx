import { Button } from '@mui/material';
import React from 'react'

// const name = "Zahid";
// function text(){
//   return "My name is ";
// }
function Product({productInfo}) {
    console.log(productInfo)
  // const {name, roll, emoji, fruits}= props;
  return (
    <div>
     {/*text()}
     {name*/}
     {/* {name}
     {roll}
     {emoji}
     {fruits} */}

{productInfo.map((produc)=>(
        <p>{produc.product_id}</p>
     ))}
     {/* {props.studentInfo.roll}
     {props.studentInfo.fav_foods.map((fav_food)=>(
      <p>{fav_food}</p>
     ))} */}
    </div>
  );
}
// {props.studentInfo.fav_foods.map((fav_food)=>(
//     <p>{fav_food}</p>
//    ))}
// export default FirstComponent
export default Product
