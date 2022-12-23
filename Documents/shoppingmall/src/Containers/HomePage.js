import { useState } from "react";

const HomePage = () => {
  //state
  const [slide, setSlide] = useState(0);
  return (
    <div className="homepage">
      <form className="homepage__form">
        <div
          className="homepage__form--img"
          style={{ transform: `translate(${slide * -102}%)` }}
        >
          <div className="homepage__form--wrapper">
            <div className="homepage__left--icon-invisible">
              <span className="homepage__form--left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </span>
            </div>
            <div className="homepage__form--left">
              <span className="homepage__form--text">ALL ITEM</span>
              <button className="homepage__form--button">MORE</button>
            </div>

            <div
              className="homepage__right--icon"
              onClick={() => {
                console.log(slide);
                setSlide(slide + 1);
              }}
            >
              <span className="homepage__form--right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </span>
            </div>
          </div>

          <img
            id="wallpaper"
            src={require("../Assets/zomboid_wallpaper_1.jpeg")}
            alt="zomboid1"
          />
        </div>

        <div
          className="homepage__form--img"
          style={{ transform: `translate(${slide * -102}%)` }}
        >
          <div className="homepage__form--wrapper">
            <div
              className="homepage__left--icon"
              onClick={() => {
                console.log(slide);
                setSlide(slide - 1);
              }}
            >
              <span className="homepage__form--left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </span>
            </div>

            <div className="homepage__form--right">
              <span className="homepage__form--text">BEST ITEM</span>
              <button className="homepage__form--button">MORE</button>
            </div>

            <div className="homepage__right--icon-invisible">
              <span className="homepage__form--right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </span>
            </div>
          </div>

          <img
            id="wallpaper"
            src={require("../Assets/zomboid_wallpaper_2.jpeg")}
            alt="zomboid2"
          />
        </div>
      </form>
    </div>
  );
};

export default HomePage;
