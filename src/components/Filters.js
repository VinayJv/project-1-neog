import { useDataContext } from "../context/dataContext";
import { useState } from "react";

export function Filters() {
    const { dispatch, menuToggle, selected, setSelected } = useDataContext();
    const [maxRange, setMaxRange] = useState(100000);

    const rangeHandler = (event) => {
        setMaxRange(event.target.value);
        dispatch({ type: "setRange", payload: Number(event.target.value) });
    };

    const categoryFilter = (event) => {
        setSelected([...selected, event.target]);
        if(event.target.checked===true){
            dispatch({type: "setCategory",payload: event.target.value});
        }
        else {
            dispatch({type: "removeCategory", payload: event.target.value});
        }
    };

    return (
        <div className={menuToggle ? "filters-container-active" : "filters-container"}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h4>Filters</h4>
                <button className="btn-basic" onClick={() => {
                    selected.forEach((target)=>{
                        target.checked = false;
                    })
                    dispatch({ type: "resetFilters", payload: "" })
                }}>Clear</button>
            </div>
            <div className="sort-container">
                <p style={{ fontSize: "1.2rem", margin: "0.2rem" }}>Sort: </p>
                <div>
                    <input type="radio" name="priceRadio" id="LowToHigh" value="LowToHigh" onChange={(event) => {
                        if (event.target.checked === true) {
                            setSelected([...selected, event.target]);
                            dispatch({ type: "SortData", payload: event.target.value })
                        }
                    }}></input>
                    <label htmlFor="LowToHigh" style={{ margin: "0.2rem" }}> Low To High</label>
                </div>
                <div>
                    <input type="radio" name="priceRadio" id="HighToLow" value="HighToLow" onChange={(event) => {
                        if (event.target.checked === true) {
                            setSelected([...selected, event.target]);
                            dispatch({ type: "SortData", payload: event.target.value })
                        }
                    }}></input>
                    <label htmlFor="HighToLow" style={{ margin: "0.2rem" }}> High To Low</label>
                </div>
            </div>
            <div className="sort-container">
                <p style={{ fontSize: "1.2rem", margin: "0.2rem" }}>Price Range: </p>
                <input type="range" id="priceRange" min="1000" max="300000" onChange={rangeHandler} style={{ width: "100%" }} value={maxRange}></input>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>₹ 1000</span>
                    <span>₹ {maxRange}</span>
                </div>
            </div>
            <div className="sort-container">
                <p style={{ fontSize: "1.2rem", margin: "0.2rem" }}>Category: </p>
                <div>
                    <input type="checkbox" id="Graphic Cards" value="Graphic Cards" onChange={categoryFilter} className="categoryCheckBox"></input>
                    <label htmlFor="Graphic Cards">Graphics Card</label>
                </div>
                <div>
                    <input type="checkbox" id="CPU Coolers" value="CPU Coolers" onChange={categoryFilter} className="categoryCheckBox"></input>
                    <label htmlFor="CPU Coolers">Cpu Cooler</label>
                </div>
                <div>
                    <input type="checkbox" id="Storage" value="Storage" onChange={categoryFilter} className="categoryCheckBox"></input>
                    <label htmlFor="Storage">Storage</label>
                </div>
            </div>
            <div className="sort-container">
                <p style={{ fontSize: "1.2rem", margin: "0.2rem" }}>Ratings: </p>
                <div>
                    <input type="radio" id="radioRating4.5" name="radio" value={4.5} onChange={(event)=>{
                        if(event.target.checked===true){
                            setSelected([...selected, event.target]);
                            dispatch({type:"FilterByRating",payload: event.target.value})
                        }
                    }}></input>
                    <label htmlFor="radioRating"> Above 4.5</label>
                </div>
                <div>
                    <input type="radio" id="radioRating4" name="radio" value={4.0} onChange={(event)=>{
                        if(event.target.checked===true){
                            setSelected([...selected, event.target]);
                            dispatch({type:"FilterByRating",payload: event.target.value})
                        }
                    }}></input>
                    <label htmlFor="radioRating4"> Above 4.0</label>
                </div>
                <div>
                    <input type="radio" id="radioRating3.5" name="radio" value={3.5} onChange={(event)=>{
                        if(event.target.checked===true){
                            setSelected([...selected, event.target]);
                            dispatch({type:"FilterByRating",payload: event.target.value})
                        }
                    }}></input>
                    <label htmlFor="radioRating3.5"> Above 3.5 </label>
                </div>
                <div>
                    <input type="radio" id="radioRating3.0" name="radio" value={3.0} onChange={(event)=>{
                        if(event.target.checked===true){
                            setSelected([...selected, event.target]);
                            dispatch({type:"FilterByRating",payload: event.target.value})
                        }
                    }}></input>
                    <label htmlFor="radioRating3.0"> Above 3.0 </label>
                </div>
            </div>
        </div>
    )
}