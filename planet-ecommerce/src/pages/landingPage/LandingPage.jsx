import "./landingPage.css";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Navigation , CardVertical , Category} from "../../components/";
import HeroImg from "../../images/pngegg.png"
import {useCategoryContext, useCartContext, useWishlistContext, useProductPageContext } from "../../context/";
import {  useEffect  } from "react";
import axios from "axios";


const LandingPage = () => {

    const { category, setCategory } = useCategoryContext();

    const { productListing, setProductListing } = useProductPageContext();
    const {cart,setCart, addToCart} = useCartContext();
    const { setWishlist, addToWishlist } = useWishlistContext();

    console.log("this is products", productListing);    
    console.log("this is cart", cart);   

    console.log("this is category", category);
    
    useEffect(() => {  
        (async ()=>{
            const response = await axios.get('/api/products');
           if(response.status === 200){
               setProductListing(response.data.products);
           }
        })();
        }, [])

    return (
        <div>
        <Navigation />

        <section className="hero-section">

        <div className="hero-text">The Best <span className="light-green">PLANTS</span>
        <p className="hero-section-para">FOR YOUR HOME</p>
     <div className="cta-btns">
       <NavLink to='/products'><button className="primary-cta" >Buy Now <FaArrowRight style={{fontSize: "18px"}}/></button></NavLink>
    </div>
</div>
<div className="img-hero">
    <img src={HeroImg}/>
</div>
</section>

<section className="category-section">
        <h3 className="category-heading">Categories</h3>
        <div className="category">
            
            <Category category="All Plants" />
            <Category category="Air Purifying Plants" />
            <Category category="Indoor Plants" />
            <Category category="Flowering Plants" />
            <Category category="Herb Plants" />
          
        </div>
    </section>

    <div className="category-header">
        <h3 className="category-subheading">Best Selling Plants</h3>
       <NavLink to='/products' ><button className="btn btn--primary">View All</button></NavLink> 
    </div>

    <section class="cards">
        <div class="card--container">
            
            {
                productListing.filter(item=>item.rating>4.4).map(product => (
                    <CardVertical key={product._id} 
                    product={product} 
                    addToCart={()=>addToCart(product, setCart)} 
                    addToWishlist={()=>addToWishlist(product, setWishlist)}/>
                ))
            }
        </div>
        </section>

        </div>
    );
}

export { LandingPage };