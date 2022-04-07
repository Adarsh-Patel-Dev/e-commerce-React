import { createContext, useState
 } from "react";


const CategoryContext = createContext();

const CategoryProvider = ({children}) =>{
    const [category, setCategory] = useState([]);

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
    <CategoryContext.Provider value={{ category, setCategory, getAllCategory, getCategory}}>
    {children}
    </CategoryContext.Provider>
  )
}

export  { CategoryContext, CategoryProvider };