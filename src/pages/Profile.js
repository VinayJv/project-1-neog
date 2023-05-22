import { useDataContext } from "../context/dataContext";

export function Profile(){
    const { dispatch } = useDataContext(); 
    return(<div><h1>This is User Profile</h1>
    <button onClick={()=>dispatch({type:"Logout"})}>Logout</button></div>)
}