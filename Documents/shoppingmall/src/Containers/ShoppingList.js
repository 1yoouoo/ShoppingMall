import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../API/Api";

const ShoppingList = () => {
  // first Rendering
  const page = 0;
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    API.getitems(page).then((data) => {
      console.log(data.data.data.itemListResponses);
      data.data.data.itemListResponses &&
        setItemList(data.data.data.itemListResponses);
      console.log(itemList[0]?.name);
    });
  }, []);
  // hook
  const { itemId } = useParams();
  const navigate = useNavigate();
  const sortList = ["LOW PRICE", "HIGH PRICE", "NEW", "HIT"];
  const onClickTest = () => {
    console.log(itemId);
    navigate(`/shop/${itemId}`);
  };
  return (
    <div className="shopping-list">
      <div className="shopping-list__form">
        <div className="shopping-list__form--top">
          <span className="shopping-list__top--total">
            TOTAL <b>954</b> ITEMS
          </span>
          <span className="shopping-list__top--sort">
            {sortList.map((sort) => {
              return (
                <span className="shopping-list__sort--item" key={sort}>
                  {sort}
                </span>
              );
            })}
          </span>
        </div>
        <div className="shopping-list__form--bottom">
          {itemList.map((item) => {
            return (
              <div
                className="shopping-list__item"
                key={item.item_id}
                onClick={onClickTest}
              >
                <img
                  src={require("../Assets/shopping-list-sample-1.jpeg")}
                  alt="item1"
                />
                <span className="shopping-list__item--title">{item.name}</span>
                <b className="shopping-list__item--price">{item.price}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
