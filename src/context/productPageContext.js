import {
  createContext,
  useContext,
  useReducer,
} from "react";
const ProductPageContext = createContext();
const useProductPageContext = () => useContext(ProductPageContext);

const ProductPageProvider = ({ children }) => {
  function productReducer(state, action) {
    switch (action.type) {
      case "PRODUCTS":
        return { ...state, productListing: action.payload };

      case "RATING":
        return { ...state, rating: action.payload };

      case "SORT":
        return { ...state, sort: action.payload };

      case "PRICERANGE":
        return { ...state, priceRange: action.payload };

      case "CATEGORY":
        return { ...state, category: action.payload };

      case "FLOWERINGPLANTS":
        return {
          ...state,
          category: {
            ...state["category"],
            floweringPlants: !state.category.floweringPlants,
          },
        };

      case "INDOORPLANTS":
        return {
          ...state,
          category: {
            ...state["category"],
            indoorPlants: !state.category.indoorPlants,
          },
        };

      case "HERBPLANTS":
        return {
          ...state,
          category: {
            ...state["category"],
            herbPlants: !state.category.herbPlants,
          },
        };

      case "AIRPURIFYINGPLANTS":
        return {
          ...state,
          category: {
            ...state["category"],
            airPurifyingPlants: !state.category.airPurifyingPlants,
          },
        };

      default:
        break;
    }
  }

  const [productState, productDispatch] = useReducer(productReducer, {
    productListing: [],
    sort: false,
    rating: false,
    priceRange: 2500,
    category: {
      airPurifyingPlants: false,
      floweringPlants: false,
      indoorPlants: false,
      herbPlants: false,
    },
  });

  const { productListing, sort, rating, priceRange, category } = productState;

  return (
    <ProductPageContext.Provider
      value={{
        productListing,
        sort,
        rating,
        priceRange,
        category,
        productDispatch,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};

export { ProductPageProvider, useProductPageContext };
