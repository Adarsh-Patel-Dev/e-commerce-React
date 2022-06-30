import "./productlisting.css"
import { CardVertical , AsideBar , Navigation } from "../../components/";
import { useEffect } from 'react';
import axios from 'axios';
import { useProductPageContext, useCartContext, useWishlistContext, useCategoryContext } from "../../context/";


const ProductListing = () =>{

    const {productDispatch,  productListing, sort, rating, priceRange, category } = useProductPageContext();

   const { dispatch, addToCart} = useCartContext();
   const {  addToWishlist } = useWishlistContext();
  const { searchValue, setSearchValue } = useCategoryContext()


    useEffect(() => {  
    (async ()=>{
        const response = await axios.get('/api/products');
       if(response.status === 200){
           productDispatch({type:"PRODUCTS", payload:response.data.products});
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
        if(category.airPurifyingPlants && category.floweringPlants && category.indoorPlants && category.herbPlants) {
            return sortedProductListing
        }

        if(category.airPurifyingPlants && category.floweringPlants && category.indoorPlants) {
            return sortedProductListing.filter(product => product.categoryName !== "HerbPlants" );
        }

        if(category.airPurifyingPlants && category.floweringPlants && category.herbPlants) {
            return sortedProductListing.filter(product => product.categoryName !== "IndoorPlants" );
        }
       
        if(category.airPurifyingPlants && category.herbPlants && category.indoorPlants) {
            return sortedProductListing.filter(product => product.categoryName !== "FloweringPlants" );
        }
      
        if(category.floweringPlants && category.herbPlants && category.indoorPlants) {
            return sortedProductListing.filter(product => product.categoryName !== "AirPurifyingPlants" );
        }
        
        if(category.airPurifyingPlants && category.floweringPlants) {
            return sortedProductListing.filter(product => product.categoryName === "AirPurifyingPlants" || product.categoryName === "FloweringPlants");
        }
        
        if(category.indoorPlants && category.herbPlants) {
            return sortedProductListing.filter(product => product.categoryName === "IndoorPlants" || product.categoryName === "HerbPlants");
        }
        
        if(category.airPurifyingPlants && category.indoorPlants) {
            return sortedProductListing.filter(product => product.categoryName === "AirPurifyingPlants" || product.categoryName === "IndoorPlants");
        }
        
        if(category.airPurifyingPlants && category.herbPlants) {
            return sortedProductListing.filter(product => product.categoryName === "AirPurifyingPlants" || product.categoryName === "HerbPlants");
        }
        
        if(category.floweringPlants && category.indoorPlants) {
            return sortedProductListing.filter(product => product.categoryName === "FloweringPlants" || product.categoryName === "IndoorPlants");
        }
        
        if(category.herbPlants && category.floweringPlants) {
            return sortedProductListing.filter(product => product.categoryName === "HerbPlants" || product.categoryName === "FloweringPlants");
        }
        
        if(category.airPurifyingPlants){
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

    const searchResultData = finalCategoryData.filter(
        (data) =>
          data.title.toLowerCase().includes(searchValue) ||
          data.desc.toLowerCase().includes(searchValue)
      );

    
    return(
        <>
        <Navigation/>
        <section class="body-section">
            <AsideBar/>
          <section class="main-section">
            <h2 class="main-section-title">Results: <span className="green">({finalCategoryData.length})</span>
            </h2>
            <div>
            <div class="main-section-card">

              {searchResultData.map(product => (<CardVertical key={product._id} 
              product={product}
              addToCart={()=>addToCart(product, dispatch)}
              addToWishlist={()=>addToWishlist(product,dispatch)}
              />))}

            </div>
            </div>
        </section>
        </section>
        </>
    )
}

export { ProductListing }