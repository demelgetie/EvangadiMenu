import { Component } from "react";
import SingleFood from "./SingleFood.jsx";
import menu from "../commonResource/data.js";

class FoodItem extends Component {
  render() {
    return (
      <div className="foods-container">
        {menu.map(({ id, img, title, price, desc }) => (
          <SingleFood
            key={id}
            img={img}
            title={title}
            price={price}
            desc={desc}
          />
        ))}
      </div>
    );
  }
}

export default FoodItem;

// let call = ()=> {
//   return(

//   )
// }

// menu.map((item) => {
//   const isExpensive = item.price > 50;
//   const displayPrice = isExpensive ? "Expensive" : "Affordable";

//   return <FoodItem key={item.id} title={item.title} price={displayPrice} />;
// });
