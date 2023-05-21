import { useDataContext } from "../context/dataContext";
import { Navigate } from "react-router";

export function Auth({children}){
    const { isLoggedIn } = useDataContext();

    return isLoggedIn ? children : <Navigate to="/login" />;
}