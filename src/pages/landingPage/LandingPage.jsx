import "./landingPage.css";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Navigation, CardVertical, Category } from "../../components/";
import HeroImg from "../../images/pngegg.png";
import {
  useCartContext,
  useWishlistContext,
  useProductPageContext,
} from "../../context/";
import { useCategoryContext } from "../../context";
import { useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const navigate = useNavigate();
  const { productListing, productDispatch, productState } =
    useProductPageContext();
  const { state, dispatch } = useCartContext();
  const { cart } = state;
  const { setWishlist, addToWishlist } = useWishlistContext();

  const { searchValue, setSearchValue, category } = useCategoryContext();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        productDispatch({ type: "PRODUCTS", payload: response.data.products });
      }
    })();
  }, []);

  return (
    <div>
      <Navigation />

      <section className="hero-section">
        <div className="hero-text">
          The Best <span className="light-green">PLANTS</span>
          <p className="hero-section-para">FOR YOUR HOME</p>
          <div className="cta-btns">
            <NavLink to="/products">
              <button className="primary-cta">
                Buy Now <FaArrowRight style={{ fontSize: "18px" }} />
              </button>
            </NavLink>
          </div>
        </div>
        <div className="img-hero">
          <img src={HeroImg} />
        </div>
      </section>

      <section className="category-section">
        <h3 className="category-heading">Categories</h3>
        <div className="category">
          {category.map((category) => (
            <Category
              categories={category.categoryName}
              func={() => {
                let categoryUppercase = category.categoryName.toUpperCase();
                if (categoryUppercase === "FLOWERINGPLANTS") {
                  productDispatch({ type: "FLOWERINGPLANTS" });
                }
                if (categoryUppercase === "INDOORPLANTS") {
                  productDispatch({ type: "INDOORPLANTS" });
                }
                if (categoryUppercase === "HERBPLANTS") {
                  productDispatch({ type: "HERBPLANTS" });
                }
                if (categoryUppercase === "AIRPURIFYINGPLANTS") {
                  productDispatch({ type: "AIRPURIFYINGPLANTS" });
                }
                navigate("/products");
              }}
            />
          ))}
          <Category categories="Indoor Plants" />
          <Category categories="Flowering Plants" />
          <Category categories="Herb Plants" />
        </div>
      </section>

      <div className="category-header">
        <h3 className="category-subheading">Best Selling Plants</h3>
        <NavLink to="/products">
          <button className="btn btn--primary">View All</button>
        </NavLink>
      </div>

      <section class="cards">
        <div class="card--container">
          {productListing
            .filter((item) => item.rating > 4.4)
            .map((product) => (
              <CardVertical
                key={product._id}
                product={product}
                addToCart={() => addToCart(product, dispatch)}
                addToWishlist={() => addToWishlist(product, dispatch)}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export { LandingPage };
