import "./asidebar.css"
import { FaStar } from "react-icons/fa";
import { useEffect, useState, useContext } from 'react';
import { ProductPageContext } from "../../context/productPageContext";


const AsideBar = () =>{

    const { sort, setSort } = useContext(ProductPageContext);
    const {  rating , setRating } = useContext(ProductPageContext);
    const {  priceRange , setPriceRange } = useContext(ProductPageContext);
    const { category , setCategory } = useContext(ProductPageContext);

    const [key, setKey] = useState(0);

    
    
    console.log(rating);
    console.log(priceRange);
    console.log(category);

    function clearFilters(){
        setSort(true);
        setRating(false);
        setPriceRange(2500);
        setCategory({allPlants:false, airPurifyingPlants:false,floweringPlants:false, indoorPlants: false, herbPlants: false,});
        console.log("clicked");
        setKey(key + 1);
    }
    

    return(
        
        <aside className="aside-section" key={key}>
            <div className="aside-section-header">
                <h3 className="aside-section-title">Filters</h3>
                <button 
                onClick={clearFilters}
                 className="btn clear-btn">Clear All</button>
            </div>

            <div className="price-section">
                <h3 className="aside-section-title-md">Price Range</h3>

               
                <div className="range-input-container">
                    
                    <div className="price-label">
                        <p>{'\u20B9'} 500</p>
                        <p>{'\u20B9'} 1000</p>
                        <p>{'\u20B9'} 1500</p>
                        <p>{'\u20B9'} 2500</p>
                    </div>
                    <label className="slider" htmlFor="volume">
                        <input className="input-range"
                        onChange={(e) => {setPriceRange(e.target.value)}}
                         type="range" min="500" max="2500" 
                         value={priceRange} name="volume" />
                    </label>

                </div>
            </div>

            <div className="category-section-aside">
                <h3 className="aside-section-title-md">Categories</h3>
                <div className="checkbox-input">
                    <input type="checkbox" 
                    onChange={(e) => {setCategory(prev=>({ ...prev, allPlants:e.target.checked}))}}
                    name="check" className="checkbox"  />
                    <label htmlFor="check">All Plants</label>
                </div>
               
                <div className="checkbox-input">
                    <input type="checkbox"
                    onChange={(e) => {setCategory(prev=>({ ...prev, airPurifyingPlants:e.target.checked}))}}
                     name="check" className="checkbox" /><label htmlFor="check"> Air Purifying
                        Plants</label>
                </div>

                <div className="checkbox-input">
                    <input type="checkbox"
                     onChange={(e) => {setCategory(prev=>({ ...prev, floweringPlants:e.target.checked}))}}
                     name="check" className="checkbox" /><label htmlFor="check"> Flowering Plants</label>
                </div>
                
                <div className="checkbox-input">
                    <input type="checkbox" 
                    onChange={(e) => {setCategory(prev=>({ ...prev, indoorPlants:e.target.checked}))}}
                    name="check" className="checkbox" /><label htmlFor="check"> Indoor Plants</label>
                </div>

                <div className="checkbox-input">
                    <input type="checkbox"
                    onChange={(e) => {setCategory(prev=>({ ...prev, herbPlants:e.target.checked}))}}
                     name="check" className="checkbox" /><label htmlFor="check"> Herb Plants</label>
                </div>
            </div>

            <div className="rating-section">
                <h3 className="aside-section-title-md">Rating</h3>

                <div className="radio-input">
                    <input type="radio"
                    onChange={()=>{setRating(4)}}
                    value="4"
                    checked={rating === 4}
                     name="radio" className="radio" /><label htmlFor="radio"> 4 <FaStar className="fa fa-star"
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                    <input type="radio" 
                    onChange={()=>{setRating(3)}}
                    value="3"
                    checked={rating === 3}
                    name="radio" className="radio" /><label htmlFor="radio"> 3 <FaStar className="fa fa-star"
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                    <input type="radio" 
                     onChange={()=>{setRating(2)}}
                    value="2" 
                    checked={rating === 2}
                    name="radio" className="radio" /><label htmlFor="radio"> 2 <FaStar className="fa fa-star"
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                    <input type="radio" 
                    onChange={()=>{setRating(1)}}
                    value="1"
                    checked={rating === 1}
                    name="radio" className="radio" /><label htmlFor="radio"> 1 <FaStar className="fa fa-star"
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>
            </div>

            <div className="rating-section">
                <h3 className="aside-section-title-md">Sort By</h3>

                <div className="radio-input">
                    <input 
                    onChange={()=>{setSort(true)}}
                    type="radio" name="sortby" className="radio" /><label htmlFor="radio"> Low to High</label>
                </div>

                <div className="radio-input">
                    <input 
                     onChange={()=>{setSort(false)}}
                    type="radio" name="sortby" className="radio" /><label htmlFor="radio"> High to Low</label>
                </div>
            </div>

        </aside>
     
    )
}

export { AsideBar }