import { useDataContext } from "../context/dataContext";
import { useState } from "react";

export function Filters() {
    const { dispatch } = useDataContext();
    const [selected, setSelected] = useState("");
    return (
        <div className="filters-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h4>Filters</h4>
                <button className="btn-basic" onClick={() => {
                    if (selected !== "") {
                        selected.checked = false;
                    }
                    dispatch({ type: "resetFilters", payload: "" })
                }}>Clear</button>
            </div>
            <div className="sort-container">
                <p style={{ fontSize: "1.2rem", margin: "0.2rem" }}>Price: </p>
                <div>
                    <input type="radio" name="priceRadio" id="LowToHigh" value="LowToHigh" onChange={(event) => {
                        if (event.target.checked === true) {
                            setSelected(event.target);
                            dispatch({ type: "SortData", payload: event.target.value })
                        }
                    }}></input>
                    <label htmlFor="LowToHigh" style={{ margin: "0.2rem" }}> Low To High</label>
                </div>
                <div>
                    <input type="radio" name="priceRadio" id="HighToLow" value="HighToLow" onChange={(event) => {
                        if (event.target.checked === true) {
                            setSelected(event.target);
                            dispatch({ type: "SortData", payload: event.target.value })
                        }
                    }}></input>
                    <label htmlFor="HighToLow" style={{ margin: "0.2rem" }}> High To Low</label>
                </div>
            </div>
        </div>
    )
}