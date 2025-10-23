import React, { Component } from "react";
import "./MenuItems.css";
export default class MenuItems extends Component {
  render() {
    //destruction
    const { title, imgLink, category, price, description, link } = this.props;
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={imgLink} />
          </div>
          <p className="categ">{category}</p>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
            {link && <p>{link}</p>}
          </div>
          <div className="food-desc">{description}</div>
        </div>
      </>
    );
  }
}




















// METHOD 1: console.log(this.props);
