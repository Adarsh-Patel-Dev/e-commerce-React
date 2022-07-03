import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./category.css";

function Category({ categories, func, img }) {
  return (
    <div>
      <div className="category-container" 
      onClick={func}>
      <div className="category-img-conatainer">
       {/* <img src={img} className="category-img"/> */}
      </div>
        <p to="/products" className="category-link">
          {categories}
          <FaArrowRight
            className="far fa-arrow-alt-circle-right"
            style={{ fontSize: "3rem" }}
          />
        </p>
      </div>
    </div>
  );
}

export { Category };
