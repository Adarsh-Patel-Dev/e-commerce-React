import { createContext, useContext, useReducer, useEffect, useState } from "react";
import {Toast} from "../components/Toast/Toast"
const ProductPageContext = createContext();
const useProductPageContext = () => useContext(ProductPageContext);



const ProductPageProvider = ({children}) => {

    function productReducer( state, action){
        switch (action.type) {
            case "PRODUCTS":
                return { ...state, productListing:action.payload}
              
            case "RATING":
                return { ...state, rating:action.payload}
                
            case "SORT":
                return { ...state, sort:action.payload}
        
            case "PRICERANGE":
                return { ...state, priceRange:action.payload}
                
            case "CATEGORY":
                return { ...state, category: action.payload}


            case "FLOWERINGPLANT":
                return {
                    ...state,
                    category: {
                        ...state['category'],
                        floweringPlants:!state.category.floweringPlants
                    }
                }    
        
            case "INDOORPLANT":
                return {
                    ...state,
                    category: {
                        ...state['category'],
                        indoorPlants:!state.category.indoorPlants
                    }
                }    
        
            case "HERBPLANT":
                return {
                    ...state,
                    category: {
                        ...state['category'],
                        herbPlants:!state.category.herbPlants
                    }
                }    
        
            case "AIRPURIFYINGPLANT":
                return {
                    ...state,
                    category: {
                        ...state['category'],
                        airPurifyingPlants:!state.category.airPurifyingPlants
                    }
                }    
        
            default:
                break;
        }
    }

    const [ productState, productDispatch ] = useReducer( productReducer, { 
        productListing:[],
        sort: false,
        rating: false,
        priceRange: 2500,
        category:{
             airPurifyingPlants:false,floweringPlants:false, indoorPlants: false, herbPlants: false
        }

    })

    const { productListing, sort, rating, priceRange, category } = productState;

    localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM");

    return (
        <ProductPageContext.Provider value={{ productListing, sort, rating, priceRange, category, productDispatch }}>
        {children}
        </ProductPageContext.Provider>
    );
}

export { ProductPageProvider, useProductPageContext };