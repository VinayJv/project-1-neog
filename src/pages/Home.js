import { useDataContext } from "../context/dataContext";
import { useState } from "react";

export function Home() {
  const { heroImage } = useDataContext();
  const [heroImageId, setHeroImageId] = useState(0);

  return (
    <div className="home">
      <div className="hero-container">
        <button
          className="prev-img-btn"
          onClick={() =>
            setHeroImageId(() => {
              if (heroImageId <= 0) {
                return heroImage.length-1;
              } else {
                return heroImageId - 1;
              }
            })
          }
        >
          {"<"}
        </button>
        <img
          src={heroImage[heroImageId].image}
          alt=""
          className="hero-image"
        ></img>
        <button
          className="next-img-btn"
          onClick={() =>
            setHeroImageId(() => {
              if (heroImageId >= heroImage.length-1) {
                return 0;
              } else {
                return heroImageId + 1;
              }
            })
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
