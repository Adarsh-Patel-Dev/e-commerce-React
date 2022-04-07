import { createContext, useContext, useReducer, useEffect, useState } from "react";

const ProductPageContext = createContext();
const useProductPageContext = () => useContext(ProductPageContext);



const ProductPageProvider = ({children}) => {

    const [ productListing, setProductListing ] = useState([]);
    
    const [sort , setSort] = useState(false);
    const [rating , setRating] = useState(false);
    const [priceRange , setPriceRange] = useState(2500);
    const [category , setCategory] = useState({allPlants:false, airPurifyingPlants:false,floweringPlants:false, indoorPlants: false, herbPlants: false,});

    localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM");

    return (
        <ProductPageContext.Provider value={{ sort, setSort, rating , setRating, priceRange, setPriceRange, category, setCategory, productListing, setProductListing }}>
        {children}
        </ProductPageContext.Provider>
    );
}

export { ProductPageProvider, useProductPageContext };