import React from 'react';

import "../Game.css";

// const onClick = (event,id)=>{
//     debugger;
//     alert("Item Clicked" + id)
// }

const Gamecircle = ({id,children,classNames,onCircleCliked}) => {
    
    // const style = {
    //     backgroundColor : id % 2 ===0 ? "red" : "blue"
    // };
  return (
    
    <div className={`gameCircle ${classNames}`}  onClick={()=>onCircleCliked(id)}>
     {children}
    </div>
  )
}

export default Gamecircle
