/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import { PUBLIC_IMAGE_PATH } from "../utils/constant";
import Header from "./Header";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { state } = useLocation();

  return (
    <div>
      <Header />
      <div className="productDetails">
        <div className="productInfoContainer">
          <div className="productImg">
            <img src={`${state?.thumbnail}`} alt="" />
          </div>
          <div className="productInfo">
            <div className="productTitle"> {state.title} </div>
            <div className="productDesc">{state?.description}</div>
            <div className="rating">
              {state.rating}{" "}
              <img src={PUBLIC_IMAGE_PATH + "/star.png"} alt="" />{" "}
            </div>
            <div className="productPrice">
              {" "}
              ₹{state?.price}{" "}
              <span className="productDiscount">
                {" "}
                ({state?.discountPercentage}% OFF){" "}
              </span>
            </div>
            <div className="productTax"> inclusive of all taxes</div>
            <div className="productBtn">
              <button className="addToBag"> add to bag </button>
              <button className="wishlist">wish list </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
