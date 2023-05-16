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
    } catch (err) {
      console.log(err);
    }
  };
  const reducerFunction = (state, { type, payload }) => {
    switch (type) {
      case "dataInitialization":
        return { ...state, categoryData: payload };
      default:
        break;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [menuToggle, setMenuToggle] = useState(false);
  const [state, dispatch] = useReducer(reducerFunction, { categoryData: [] });
  return (
    <DataContext.Provider value={{ menuToggle, setMenuToggle, heroImage, state }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
