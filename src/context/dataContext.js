import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { heroImage } from "../constants/heroImage";

const DataContext = createContext(null);

export function DataWrapper({ children }) {
  const getData = async () => {
    try {
      const response = await fetch("/api/categories");
      let data = await response.json();
      dispatch({ type: "dataInitialization", payload: data.categories });
      const products = await fetch("/api/products");
      let productsData = await products.json();
      dispatch({ type: "updateData", payload: productsData.products });
    } catch (err) {
      console.log(err);
    }
  };
  const reducerFunction = (state, { type, payload }) => {
    switch (type) {
      case "dataInitialization":
        return { ...state, categoryData: payload };
      case "updateData":
        return { ...state, productData: payload };
      case "SortData":
        if (payload === "LowToHigh") {
          return { ...state, sortBy: payload }
        }
        else {
          return { ...state, sortBy: payload }
        }
      case "resetFilters":
        return { ...state, sortBy: "none" };
      default:
        break;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [menuToggle, setMenuToggle] = useState(false);
  const [state, dispatch] = useReducer(reducerFunction, { categoryData: [], productData: [], sortBy: "none" });
  return (
    <DataContext.Provider value={{ menuToggle, setMenuToggle, heroImage, state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
