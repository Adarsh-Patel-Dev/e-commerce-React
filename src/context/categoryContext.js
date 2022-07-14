import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext();
const useCategoryContext = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async function getAllCategory() {
      const response = await axios({
        method: "get",
        url: "/api/categories",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        setCategory(response.data.categories);
      }
    })();
  }, []);

  async function getCategory(categoryId) {
    const response = await axios({
      method: "get",
      url: `/api/categories/${categoryId}`,
    });
    setCategory(response.data.category);
  }

  return (
    <CategoryContext.Provider
      value={{
        searchValue,
        setSearchValue,
        category,
        setCategory,
        getCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { useCategoryContext, CategoryProvider };
