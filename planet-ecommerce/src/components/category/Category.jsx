
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './category.css'

function Category({category}) {
  return (
    <div>
        <div className="category-container">
                <NavLink to='/products' className="category-link" href="#"> {category}
                <FaArrowRight className="far fa-arrow-alt-circle-right"
                        style={{fontSize: "3rem"}}/>
                </NavLink>
            </div>
    </div>
  )
}

export default Category