import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigatorItem from "../Components/NavigatorItem";

const Header = () => {
  //state
  const [toggle, setToggle] = useState(false);
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
  const onClickToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="header">
      <div className="header-form">
        <div className="header-form__logo">
          <b>ZOMBO</b>
        </div>
        <ul className="header-form__left">
          <span className="header-form__icon--menubar" onClick={onClickToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
          {toggle ? (
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
        <div className="header-form__right">
          <span className="header-form__icon--search">
            <input />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </span>
          <span className="header-form__icon--basket">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
          </span>
          <span
            className="header-form__icon--user"
            onClick={() => navigate("/signin")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
