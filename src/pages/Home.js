import { useDataContext } from "../context/dataContext";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

export function Home() {
  const { heroImage, state } = useDataContext();
  const [heroImageId, setHeroImageId] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="hero-container">
        <img
          src={heroImage[heroImageId].image}
          alt=""
          className="hero-image"
        ></img>
        <div className="radio-btn">
          {heroImage.map(({ id, image }, index) => {
            if (index === 0) {
              return (
                <input
                  type="radio"
                  className="radio-input"
                  key={index}
                  name="radio"
                  defaultChecked
                  onChange={(event) => {
                    if (event.target.checked === true) {
                      setHeroImageId(index);
                    }
                  }}
                ></input>
              );
            } else {
              return (
                <input
                  type="radio"
                  className="radio-input"
                  key={index}
                  name="radio"
                  onChange={(event) => {
                    if (event.target.checked === true) {
                      setHeroImageId(index);
                    }
                  }}
                ></input>
              );
            }
          })}
        </div>
      </div>
      <h2>CATEGORIES</h2>
      <div className="category-container">
        {state.categoryData.map(({ id, categoryName, image }) => (
          <div className="category-card" key={id}>
            <img src={image} alt="" className="card-images"></img>
            <p className="card-description">{categoryName}</p>
          </div>
        ))}
      </div>
      <div className="promotion-img-container">
        <img
          src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="promotion-img"
        ></img>
        <div className="promotion-description-container">
          <p className="promotion-text">
            <span className="letter-highlight">F</span>or All Your Gaming Needs.
          </p>
          <button className="btn-basic" onClick={()=>navigate("/store")}>Explore</button>
        </div>
      </div>
    </div>
  );
}
