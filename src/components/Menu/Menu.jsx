import React, { Component } from "react";

import MenuItems from "../MenuItems/MenuItems";
import menu from "../../commonResource/data";

import "./Menu.css";
export default class Menu extends Component {
  render() {
    console.log(menu);
    return (
      <div className="foods-container">
        {/* <!-- food item start --> */}
        {menu?.map((item, index) => {
          const { id, title, img, price, category, desc, link } = item;
          return (
            <MenuItems
              key={id}
              title={title}
              imgLink={img}
              price={price}
              category={category}
              description={desc}
              link={link}
            />
          );
        })}
      </div>
    );
  }
}

{
  /* <MenuItems
  title="TIMATIM SELATA (ቲማቲም ሰላጣ)"
  imgLink="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
  price="$5.99"
  description="Timatim Salata refers to a type of fresh Ethiopian tomato salad
        that’s also popular in Eritrea. It’s made with diced tomatoes,
        minced onions, and finely chopped peppers dressed with a mixture of
        berbere spices, olive oil, vinegar, and lemon juice."
/>; */
}
