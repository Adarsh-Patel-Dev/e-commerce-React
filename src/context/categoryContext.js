import { createContext, useState, useContext
 } from "react";


const CategoryContext = createContext();
const useCategoryContext = () => useContext(CategoryContext);

const CategoryProvider = ({children}) =>{
    const [category, setCategory] = useState([]);
    const [ searchValue, setSearchValue ] = useState("")

    async function getAllCategory() {
        const response = await axios({
            method: 'get',
            url: '/api/categories',

        })
        if(response.status === 200){
        setCategory(response.data.categories);
        console.log("categoryyyy",response.data.categories);
        }
    }

    async function getCategory(categoryId) {
        const response = await axios({
            method: "get",
            url: `/api/categories/${categoryId}`,

        })
        setCategory(response.data.category);
        console.log("Single categoryyyy",response.data.category);
    }




  return (
    <CategoryContext.Provider value={{ searchValue, setSearchValue, category, setCategory, getAllCategory, getCategory}}>
    {children}
    </CategoryContext.Provider>
  )
}

export  { useCategoryContext, CategoryProvider };