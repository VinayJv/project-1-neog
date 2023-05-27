import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useNavigate } from "react-router";

const DataContext = createContext(null);

export function ContextWrapper({ children }) {
  const[cartData,setCartData] = useState([]);
  const navigate = useNavigate();

  const reducerFunction = (state, { type, payload }) => {
    switch (type) {
      case "dataInitialization":
        return { ...state, categoryData: payload };

      case "updateData":
        return { ...state, productData: payload };

      case "Login":
        return { ...state, isLoggedIn: !state.isLoggedIn };

      case "userFound":
        return {...state,foundUser:payload};

      case "Logout":
        return { ...state, isLoggedIn: !state.isLoggedIn };

      case "foundUser":
        return { ...state, foundUser: payload };

      case "search":
        navigate("/store");
        return { ...state, searchFilter: payload };

      case "SortData":
        if (payload === "LowToHigh") {
          return { ...state, sortBy: payload }
        }
        else {
          return { ...state, sortBy: payload }
        };

      case "resetFilters":
        return { ...state, sortBy: payload };

      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, {
    isLoggedIn: false,
    categoryData: [],
    productData: [],
    searchFilter: "",
    sortBy: "",
    foundUser: {}
  }
  );

  const getCategoryData = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      dispatch({ type: "dataInitialization", payload: data.categories });
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsData = async() => {
    try{
      const products = await fetch("/api/products");
      const productsData = await products.json();
      dispatch({ type: "updateData", payload: productsData.products });
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryData();
    getProductsData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch, cartData, setCartData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
