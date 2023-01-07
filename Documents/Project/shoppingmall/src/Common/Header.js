import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderRight from "../Components/HeaderRight";
import MainLogo from "../Components/MainLogo";
import MobileActivateSearch from "../Components/MobileActivateSearch";
import NavigatorItem from "../Components/NavigatorItem";
const Header = () => {
  //hook
  const navigate = useNavigate();
  //state
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const shopList = [
    { ALL: "ALL" },
    { "NEW 5%": "NEW 5%" },
    { BEST: "BEST" },
    { OUTER: "OUTER" },
    { TOP: "TOP" },
    { BOTTOM: "BOTTOM" },
    { SALE: "SALE" },
    { ACC: "ACC" },
  ];
  const communityList = [
    { NOTICE: "NOTICE" },
    { "Q&A": "Q&A" },
    { REVIEW: "REVIEW" },
  ];
  const myPageList = [
    { 주문조회: "orderpage" },
    { 관심상품: "wishlist" },
    { 상품등록하기: "productregistration" },
  ];

  //function

  const onClickMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };
  const onClickSearchToggle = () => {
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
