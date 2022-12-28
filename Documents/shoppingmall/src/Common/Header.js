import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderRight from "../Components/HeaderRight";
import MainLogo from "../Components/MainLogo";
import MobileActivateSearch from "../Components/MobileActivateSearch";
import API from "../API/Api";
import NavigatorItem from "../Components/NavigatorItem";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      console.log("로그인 됨");
      setIsLogin(true);
    } else {
      console.log("로그인 안됨");
      setIsLogin(false);
    }
  });
  //hook
  const navigate = useNavigate();
  //state
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const shopList = [
    "ALL PADDING 5%",
    "ALL",
    "NEW 5%",
    "BEST",
    "OUTER",
    "TOP",
    "BOTTOM",
    "SALE",
    "ACC",
  ];
  const communityList = ["NOTICE", "Q&A", "REVIEW"];
  const myPageList = ["주문조회", "관심상품", "적립금", "배송조회"];

  //function

  const onClickMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };
  const onClickSearchToggle = () => {
    console.log("clcikc");
    setSearchToggle(!searchToggle);
  };
  return (
    <header className="header">
      {searchToggle ? (
        <>
          <MobileActivateSearch onClick={onClickSearchToggle} />
          <div
            className="activate-search__empty"
            onClick={onClickSearchToggle}
          ></div>
        </>
      ) : (
        <></>
      )}

      <div className="header-form">
        <MainLogo />
        <ul className="header-form__left">
          <span
            className="header-form__icon--menubar"
            onClick={onClickMenuToggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
          {menuToggle ? (
            <ul className="header-form__menubar--list">
              <li className="navigator-item__mobile--wrapper">
                <NavigatorItem
                  title="shop"
                  items={shopList}
                  className="navigator-item__mobile"
                  onClick={() => navigate("/shop")}
                />
              </li>
              <li className="navigator-item__mobile--wrapper">
                <NavigatorItem
                  title="community"
                  items={communityList}
                  className="navigator-item__mobile"
                />
              </li>
              <li className="navigator-item__mobile--wrapper">
                <NavigatorItem
                  title="my page"
                  items={myPageList}
                  className="navigator-item__mobile"
                />
              </li>
            </ul>
          ) : (
            <></>
          )}

          <NavigatorItem
            title="shop"
            items={shopList}
            className="navigator-item"
          />
          <NavigatorItem
            title="community"
            items={communityList}
            className="navigator-item"
          />
          <NavigatorItem
            title="my page"
            items={myPageList}
            className="navigator-item"
          />
        </ul>
        <div className="header-form__right--mobile">
          <HeaderRight
            isLogin={isLogin}
            onClickSearchToggle={onClickSearchToggle}
          />
        </div>
        <div className="header-form__right--desktop">
          <HeaderRight isLogin={isLogin} />
        </div>
      </div>
    </header>
  );
};

export default Header;
