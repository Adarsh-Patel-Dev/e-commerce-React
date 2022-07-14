import "./productlisting.css";
import { CardVertical, AsideBar, Navigation } from "../../components/";
import { useEffect, useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import {
  useProductPageContext,
  useCartContext,
  useWishlistContext,
  useCategoryContext,
} from "../../context/";

const ProductListing = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const {
    productDispatch,
    productListing,
    sort,
    rating,
    priceRange,
    category,
  } = useProductPageContext();

  const { dispatch, addToCart } = useCartContext();
  const { addToWishlist } = useWishlistContext();
  const { searchValue, setSearchValue } = useCategoryContext();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        productDispatch({ type: "PRODUCTS", payload: response.data.products });
      }
    })();
  }, []);

  const sortFunction = (productListing, sort) => {
    const sortedProductListing = [...productListing];
    if (sort) {
      return sortedProductListing.sort(
        (a, b) => a.price.discounted - b.price.discounted
      );
    } else {
      return sortedProductListing.sort(
        (a, b) => b.price.discounted - a.price.discounted
      );
    }
  };

  const sortedData = sortFunction(productListing, sort);

  const ratingFunction = (productListing, rating) => {
    const sortedProductListing = [...productListing];
    if (rating) {
      return sortedProductListing.filter((product) => product.rating >= rating);
    } else {
      return sortedProductListing;
    }
  };

  const filteredData = ratingFunction(sortedData, rating);

  const priceRangeFunction = (productListing, priceRange) => {
    const sortedProductListing = [...productListing];
    if (priceRange) {
      return sortedProductListing.filter(
        (product) => Number(product.price.discounted) <= Number(priceRange)
      );
    }
  };

  const finalData = priceRangeFunction(filteredData, priceRange);

  const categoryFunction = (productListing, category) => {
    const sortedProductListing = [...productListing];
    if (
      category.airPurifyingPlants &&
      category.floweringPlants &&
      category.indoorPlants &&
      category.herbPlants
    ) {
      return sortedProductListing;
    }

    if (
      category.airPurifyingPlants &&
      category.floweringPlants &&
      category.indoorPlants
    ) {
      return sortedProductListing.filter(
        (product) => product.categoryName !== "HerbPlants"
      );
    }

    if (
      category.airPurifyingPlants &&
      category.floweringPlants &&
      category.herbPlants
    ) {
      return sortedProductListing.filter(
        (product) => product.categoryName !== "IndoorPlants"
      );
    }

    if (
      category.airPurifyingPlants &&
      category.herbPlants &&
      category.indoorPlants
    ) {
      return sortedProductListing.filter(
        (product) => product.categoryName !== "FloweringPlants"
      );
    }

    if (
      category.floweringPlants &&
      category.herbPlants &&
      category.indoorPlants
    ) {
      return sortedProductListing.filter(
        (product) => product.categoryName !== "AirPurifyingPlants"
      );
    }

    if (category.airPurifyingPlants && category.floweringPlants) {
      return sortedProductListing.filter(
        (product) =>
          product.categoryName === "AirPurifyingPlants" ||
          product.categoryName === "FloweringPlants"
      );
    }

    if (category.indoorPlants && category.herbPlants) {
      return sortedProductListing.filter(
        (product) =>
          product.categoryName === "IndoorPlants" ||
          product.categoryName === "HerbPlants"
      );
    }

    if (category.airPurifyingPlants && category.indoorPlants) {
      return sortedProductListing.filter(
        (product) =>
          product.categoryName === "AirPurifyingPlants" ||
          product.categoryName === "IndoorPlants"
      );
    }

    if (category.airPurifyingPlants && category.herbPlants) {
      return sortedProductListing.filter(
        (product) =>
          product.categoryName === "AirPurifyingPlants" ||
          product.categoryName === "HerbPlants"
      );
    }

    if (category.floweringPlants && category.indoorPlants) {
      return sortedProductListing.filter(
        (product) =>
          product.categoryName === "FloweringPlants" ||
          product.categoryName === "IndoorPlants"
      );
    }

    if (category.herbPlants && category.floweringPlants) {
      return sortedProductListing.filter(
        (product) =>
          product.categoryName === "HerbPlants" ||
          product.categoryName === "FloweringPlants"
      );
    }

    if (category.airPurifyingPlants) {
      return sortedProductListing.filter(
        (product) => product.categoryName === "AirPurifyingPlants"
      );
    }
    if (category.floweringPlants) {
      return sortedProductListing.filter(
        (product) => product.categoryName === "FloweringPlants"
      );
    }
    if (category.indoorPlants) {
      return sortedProductListing.filter(
        (product) => product.categoryName === "IndoorPlants"
      );
    }
    if (category.herbPlants) {
      return sortedProductListing.filter(
        (product) => product.categoryName === "HerbPlants"
      );
    }
    return sortedProductListing;
  };

  const finalCategoryData = categoryFunction(finalData, category);

  const searchResultData = finalCategoryData.filter(
    (data) =>
      data.title.includes(searchValue) ||
      data.title.toLowerCase().includes(searchValue) ||
      data.title.toUpperCase().includes(searchValue) ||
      data.desc.includes(searchValue) ||
      data.desc.toLowerCase().includes(searchValue) ||
      data.desc.toUpperCase().includes(searchValue)
  );

  return (
    <>
      <section className="body-section">
        <AsideBar />
        <section className="main-section">
          {loading ? (
            <span className="spinner">
              <TailSpin color="#76C310" height={80} width={80} />
              <br />
              <b>Loading...</b>
            </span>
          ) : (
            <div>
              <h2 className="main-section-title">
                Results:
                <span className="green">({searchResultData.length})</span>
              </h2>
              <div>
                <div className="main-section-card">
                  {searchResultData.length > 0 ? (
                    searchResultData.map((product) => (
                      <CardVertical
                        key={product._id}
                        product={product}
                        addToCart={() => addToCart(product, dispatch)}
                        addToWishlist={() => addToWishlist(product, dispatch)}
                      />
                    ))
                  ) : (
                    <section className="error-section">
                      <div className="error-text">
                        <p className="error-details">
                          Sorry we couldn't find any matching results for{" "}
                          <b>{searchValue}</b>
                        </p>
                        <p className="error-details">Try different keywords.</p>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export { ProductListing };
