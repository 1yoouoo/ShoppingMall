const HomePage = () => {
  return (
    <div className="homepage">
      <form className="homepage__form">
        <div className="homepage__form--img">
          <div className="homepage__form--wrapper">
            <span className="homepage__form--text">ALL ITEM</span>
            <button className="homepage__form--button">MORE</button>
          </div>
          <img
            id="wallpaper"
            src={require("../Assets/zomboid_wallpaper_1.jpeg")}
            alt="zomboid1"
          />
        </div>

        <div className="homepage__form--img">
          <div className="homepage__form--wrapper">
            <span className="homepage__form--text">BEST ITEM</span>
            <button className="homepage__form--button">MORE</button>
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
