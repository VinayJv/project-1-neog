import { createContext, useContext,useState } from "react";
import { heroImage } from "../constants/heroImage";

 const DataContext = createContext(null);

 export function DataWrapper({children}){
    const [menuToggle,setMenuToggle] = useState(false);
    return(<DataContext.Provider value={{menuToggle,setMenuToggle,heroImage}}>{children}</DataContext.Provider>)
 }

 export const useDataContext = () => useContext(DataContext);