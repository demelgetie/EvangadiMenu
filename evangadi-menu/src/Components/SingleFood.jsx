import { Component } from "react";

class SingleFood extends Component {
  render() {
    const { img, title, price, desc } = this.props;
    return (
      <div className="single-food">
        <div className="img">
          <img src={img} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{desc}</div>
      </div>

        //  <div className=="single-food">
        //   <div className=="img">
        //     <img
        //       src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
        //     />
        //   </div>
        //   <div className=="title-price">
        //     <h3>TIMATIM SELAXA (ቲማቲም ሰላጣ)</h3>
        //     <p>$5.99</p>
        //   </div>
        //   <div className=="food-desc">
        //     Timatim Salata refers to a type of fresh Ethiopian tomato salad
        //     that’s also popular in Eritrea. It’s made with diced tomatoes,
        //     minced onions, and finely chopped peppers dressed with a mixture of
        //     berbere spices, olive oil, vinegar, and lemon juice.
        //   </div>
        // </div>
    );
  }
}

export default SingleFood;
