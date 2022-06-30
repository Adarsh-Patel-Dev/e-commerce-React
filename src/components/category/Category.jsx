
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCategoryContext } from '../../context';
import './category.css'

function Category({categories,func}) {
 
  const { category } = useCategoryContext();
  return (
    <div>
        <div className="category-container "
        onClick={func}
        >
                <p to='/products'
                 
                 className="category-link" > {categories}
                <FaArrowRight className="far fa-arrow-alt-circle-right"
                        style={{fontSize: "3rem"}}/>
                </p>
            </div>
    </div>
  )
}

export { Category }