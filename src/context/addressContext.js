import { createContext, useContext, useReducer } from 'react';
import { Toast } from "../components/Toast/Toast"
import axios from 'axios';
import { v4 as uuid } from "uuid";



const AddressContext = createContext();
const useAddressContext = () => useContext(AddressContext);

const AddressProvider = ({children}) => {

  const initialState = {
    address:[{
      name:"Adarsh",
      phone: "9012345678",
      pincode:"226022",
      city:"Lucknow",
      state:"UP",
      area:"Indira Nagar",
      flatNum:"37",
      id: uuid(),
   }],
  name:"",
  phone: "",
  pincode:"",
  city:"",
  states:"",
  area:"",
  flatNum:"",
  isOpen:false,
  isEdit:false,
  id:null,
  }

    function reducerFunc(state,action){
      switch ( action.type) {
        case "ADDRESS":
          return {...state, address:[...state.address,action.payload]}
          case "NAME":
            return { ...state, name:action.payload}
          case "SELECTED_ADDRESS":
            return { ...state, selectedAddressId:action.payload}
          case "PHONE":
            return { ...state, phone:action.payload}
          case "PINCODE":
            return { ...state, pincode:action.payload}
          case "CITY":
            return { ...state, city:action.payload}
          case "STATE":
            return { ...state, states:action.payload}
          case "AREA":
            return { ...state, area:action.payload}
          case "FLAT_NUM":
            return { ...state, flatNum:action.payload}
          case "ADDRESS_ID":
            return { ...state, id:action.payload}
          case "IS_OPEN":
            return { ...state, isOpen:action.payload}
          case "IS_EDIT":
            return { ...state, isEdit:action.payload}
            case "CLEAR_DATA":
              return { ...state, name:"",
              phone: "",
              pincode:"",
              city:"",
              states:"",
              area:"",
              flatNum:"",
             }
        default:
          break;
      }
    }

    const [ state, addressDispatch] = useReducer(reducerFunc,{  
        address:[{
            name:"Adarsh",
            phone: "9012345678",
            pincode:"226022",
            city:"Lucknow",
            states:"UP",
            area:"Faridi Nagar,Indira Nagar",
            flatNum:"37",
            id: uuid(),
         }],
        name:"",
        phone: "",
        pincode:"",
        city:"",
        states:"",
        area:"",
        flatNum:"",
        isOpen:false,
        isEdit:false,
        id:null,
        selectedAddressId:null,
      
    })

    

    
    return(
        <AddressContext.Provider value={{ state, addressDispatch }}>
          {children} 
        </AddressContext.Provider>
    );
}

export { useAddressContext, AddressProvider };