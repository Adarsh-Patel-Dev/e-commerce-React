import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Navigation } from "../../components/navigation/Navigation";
import "./landingPage.css";
import img from "../../images/pngegg.png"

const LandingPage = () => {
    return (
        <div>
        <Navigation />

        <section className="hero-section">

        <div className="hero-text">The Best <span style={{color: "#76C310"}}>PLANTS</span>
        <p className="hero-section-para">FOR YOUR HOME</p>
     <div className="cta-btns">
       <NavLink to='/products'> <button className="secondary-cta" >Explore <FaArrowDown style={{fontSize: "18px"}}/></button></NavLink>
        <button className="primary-cta" >Buy Now <FaArrowRight style={{fontSize: "18px"}}/></button>
    </div>
</div>
<div className="img-hero">
    <img src={img}/>
</div>
</section>

<section className="category-section">
        <h3 className="category-heading">Categories</h3>
        <div className="category">
            <div className="category-container">
                <a className="category-link" href="#"> All Plants 
                <FaArrowRight className="far fa-arrow-alt-circle-right"
                        style={{fontSize: "3rem"}}/></a>
            </div>

            <div className="category-container">
                <a className="category-link" href="#"> Air Purifying Plants  <FaArrowRight className="far fa-arrow-alt-circle-right"
                        style={{fontSize: "3rem"}}/></a>

            </div>

            <div className="category-container">
                <a className="category-link" href="#"> Flower Plants 
                <FaArrowRight className="far fa-arrow-alt-circle-right"
                        style={{fontSize: "3rem"}}/></a>

            </div>

            <div className="category-container">
                <a className="category-link" href="#"> Low Maintenance Plants 
                <FaArrowRight className="far fa-arrow-alt-circle-right"
                        style={{fontSize: "3rem"}}/></a>

            </div>

            <div className="category-container">
                <a className="category-link" href="#">Indoor Plants 
                <FaArrowRight className="far fa-arrow-alt-circle-right"
                        style={{fontSize: "3rem"}}/></a>

            </div>

            <div className="category-container">
                <a className="category-link" href="#"> Terrarium Plants
                <FaArrowRight className="far fa-arrow-alt-circle-right"
                        style={{fontSize: "3rem"}}/></a>
            </div>
        </div>
    </section>

    <div className="category-header">
        <h3 className="category-subheading">Best Selling Plants</h3>
       <a href="/product-listing/productListing.html"><button className="btn btn--primary">View All</button></a> 
    </div>

    <section class="cards">
        <div class="card--container">
            {/* <CardVertical/>
            <CardVertical/>
            <CardVertical/>
            <CardVertical/> */}
        </div>
        </section>


        </div>
    );
}

export { LandingPage };