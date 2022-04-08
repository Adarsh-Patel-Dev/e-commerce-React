import "./productlisting.css"
import { CardVertical , AsideBar , Navigation } from "../../components/";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useProductPageContext, useCartContext, useWishlistContext } from "../../context/";


const ProductListing = () =>{

    // const [ productListing, setProductListing ] = useState([]);
   
    const { productListing, setProductListing, sort, rating, priceRange, category } = useProductPageContext();
   const {cart,setCart, addToCart} = useCartContext();
   const { setWishlist, addToWishlist } = useWishlistContext();

    useEffect(() => {  
    (async ()=>{
        const response = await axios.get('/api/products');
       if(response.status === 200){
           setProductListing(response.data.products);
       }
    })();
    }, [])    

    const sortFunction = (productListing, sort) =>{
        const sortedProductListing = [...productListing];
        if(sort){
            return sortedProductListing.sort((a,b) => a.price.discounted - b.price.discounted);
        }else{
            return sortedProductListing.sort((a,b) => b.price.discounted - a.price.discounted);
        }
    }

    const sortedData = sortFunction(productListing, sort);

    const ratingFunction = (productListing, rating) =>{
        const sortedProductListing = [...productListing];
        if(rating){
            return sortedProductListing.filter(product => product.rating >= rating);
        }else{
            return sortedProductListing;
        }
    }

    const filteredData = ratingFunction(sortedData, rating);

    const priceRangeFunction = (productListing, priceRange) =>{
        const sortedProductListing = [...productListing];
        if(priceRange ){
            return sortedProductListing.filter(product => Number(product.price.discounted) <= Number(priceRange));
        }
    }

    const finalData = priceRangeFunction(filteredData, priceRange);

   

    const categoryFunction = (productListing, category) =>{

        const sortedProductListing = [...productListing];
        if(category.allPlants){
            return sortedProductListing;
        } if(category.airPurifyingPlants) {
            return sortedProductListing.filter(product => product.categoryName === "AirPurifyingPlants");
        }
        if(category.floweringPlants){
            return sortedProductListing.filter(product => product.categoryName === "FloweringPlants");
        }
        if(category.indoorPlants){
            return sortedProductListing.filter(product => product.categoryName === "IndoorPlants");
        }
        if(category.herbPlants){
            return sortedProductListing.filter(product => product.categoryName === "HerbPlants");
        }
        return sortedProductListing;                                                                            
    }



    const finalCategoryData = categoryFunction(finalData, category);

    
    return(
        <>
        <Navigation/>
        <section class="body-section">
            <AsideBar/>
          <section class="main-section">
            <h2 class="main-section-title">Results: <span className="green">({finalCategoryData.length})</span>
            </h2>
            <div class="main-section-card">

              {finalCategoryData.map(product => (<CardVertical key={product._id} 
              product={product}
              addToCart={()=>addToCart(product, setCart)}
              addToWishlist={()=>addToWishlist(product,setWishlist)}
              />))}

            </div>
        </section>
        </section>
        </>
    )
}

export { ProductListing }