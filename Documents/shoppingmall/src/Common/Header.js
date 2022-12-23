import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderRight from "../Components/HeaderRight";
import MainLogo from "../Components/MainLogo";
import MobileActivateSearch from "../Components/MobileActivateSearch";
import NavigatorItem from "../Components/NavigatorItem";

const Header = () => {
  //state
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();
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
          <div className="activate-search__empty" onClick={onClickSearchToggle}>
            empty
          </div>
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
                  title="SHOP"
                  items={shopList}
                  className="navigator-item__mobile"
                />
              </li>
              <li className="navigator-item__mobile--wrapper">
                <NavigatorItem
                  title="COMMUNITY"
                  items={communityList}
                  className="navigator-item__mobile"
                />
              </li>
              <li className="navigator-item__mobile--wrapper">
                <NavigatorItem
                  title="MY PAGE"
                  items={myPageList}
                  className="navigator-item__mobile"
                />
              </li>
            </ul>
          ) : (
            <></>
          )}

          <NavigatorItem
            title="SHOP"
            items={shopList}
            className="navigator-item"
          />
          <NavigatorItem
            title="COMMUNITY"
            items={communityList}
            className="navigator-item"
          />
          <NavigatorItem
            title="MY PAGE"
            items={myPageList}
            className="navigator-item"
          />
        </ul>
        <div className="header-form__right--mobile">
          <HeaderRight onClickSearchToggle={onClickSearchToggle} />
        </div>
        <div className="header-form__right--desktop">
          <HeaderRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
