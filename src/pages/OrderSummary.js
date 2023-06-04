import { useDataContext } from "../context/dataContext"

export function OrderSummary(){
    const {deliveryAddress} = useDataContext();
    console.log(deliveryAddress);
    return(<div>
        <h1>This is Order Summary</h1>
    </div>)
}