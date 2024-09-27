import { Button } from '@mui/material';
import React from 'react'

// const name = "Zahid";
// function text(){
//   return "My name is ";
// }
function FirstComponent(props) {
  // const {name, roll, emoji, fruits}= props;
  return (
    <div>
     {/*text()}
     {name*/}
     {/* {name}
     {roll}
     {emoji}
     {fruits} */}

     {props.studentInfo.name}
     {props.studentInfo.roll}
     {props.studentInfo.fav_foods.map((fav_food)=>(
      <p>{fav_food}</p>
     ))}
    </div>
  );
}

export default FirstComponent
