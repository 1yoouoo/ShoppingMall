const HomePage = () => {
  return (
    <div className="homepage">
      <form className="homepage__form">
        <div className="homepage__form--img">
          <img
            src={require("/Users/blanc/Documents/shoppingmall/src/Assets/zomboid_wallpaper_1.jpeg")}
            alt=""
          />
        </div>
        <div className="homepage__form--img">
          <img
            src={require("/Users/blanc/Documents/shoppingmall/src/Assets/zomboid_wallpaper_2.jpeg")}
            alt=""
          />
        </div>
      </form>
    </div>
  );
};

export default HomePage;
