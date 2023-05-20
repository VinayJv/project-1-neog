export function Filters() {
    return (<div className="filters-container">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h4>Filters</h4>
            <button className="btn-basic">Clear</button>
        </div>
        <label>Price</label>
        <input type="radio" name="priceRadio"></input>
        <input type="radio" name="priceRadio"></input>
    </div>)
}