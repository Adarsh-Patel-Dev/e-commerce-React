import "./productlisting.css"
import { CardVertical } from "../../components/card/CardVertical";
import { Navigation } from "../../components/navigation/Navigation";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AsideBar } from "../../components/asidebar/AsideBar";
import { ProductPageContext } from "../../context/productPageContext";
import { CartContext } from "../../context/cartContext";
import { WishlistContext } from "../../context/wishListContext";

const ProductListing = () =>{

    // const [ productListing, setProductListing ] = useState([]);
   
    const { productListing, setProductListing } = useContext(ProductPageContext);
   const {cart,setCart, addToCart} = useContext(CartContext);
   const { setWishlist, addToWishlist } = useContext(WishlistContext);

    // useEffect(() => {  
    // (async ()=>{
    //     const response = await axios.get('/api/products');
    //    if(response.status === 200){
    //        setProductListing(response.data.products);
    //    }
    // })();
    // }, [])

    // async function addToWishlist(product){
    // const res=await axios.post('/api/auth/login',{
    //     "email": "adarshbalika@gmail.com",
    //        "password": "adarshbalika"
    //    })
    //                 console.log("this is auth",res)
    // }
    // addToWishlist();

//    async function addToCart(product ){
//       const response = await axios({
//           method: 'post',
//           url: '/api/user/cart',
//           headers: { authorization: localStorage.getItem('token') },
          
//           product: product
//       });
//         console.log(response.data.cart);
//         setCart(response.data.cart);
        
//     }

// const [state, dispatch] = useReducer(CartReducer, itemsInCart);
// const addToCart = async (item) => {
//   try {
//     const response = await axios.post(
//       "/api/user/cart",
//       { product: item },
//       {
//         headers: {
//           authorization: localStorage.getItem("token"),
//         },
//       }
//     );
//     if (response.status === 201) {
//       setCart(response.data.cart);
//     //   setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product Added to cart"})
//     }
//   } catch (err) {
//     console.log("err in add to cart:",err);
//     // setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login.."})
//   }
// };



    const { sort, rating, priceRange, category } = useContext(ProductPageContext);
    

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
            <h2 class="main-section-title">Results: <span style={{color: "green"}}>({finalCategoryData.length})</span>
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