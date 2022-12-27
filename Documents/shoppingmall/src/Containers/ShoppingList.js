import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/Api";

const ShoppingList = () => {
  // first Rendering
  const page = 0;
  const [itemsData, setItemsData] = useState([]);
  useEffect(() => {
    API.getitems(page).then((data) => {
      console.log(data);
      data && setItemsData(data);
    });
  }, []);
  // hook
  const navigate = useNavigate();
  const sortList = ["LOW PRICE", "HIGH PRICE", "NEW", "HIT"];
  const onClickTest = (item_id) => {
    console.log(item_id);
    navigate(`/shop/${item_id}`);
  };
  return (
    <div className="shopping-list">
      <div className="shopping-list__form">
        <div className="shopping-list__form--top">
          <span className="shopping-list__top--total">
            TOTAL <b>{itemsData.numberOfElements}</b> ITEMS
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
          {itemsData.itemListResponses &&
            itemsData.itemListResponses.map((item) => {
              return (
                <div
                  className="shopping-list__item"
                  key={item.item_id}
                  onClick={() => onClickTest(item.item_id)}
                >
                  <img
                    src={require("../Assets/shopping-list-sample-1.jpeg")}
                    alt="item1"
                  />
                  <span className="shopping-list__item--title">
                    {item.name}
                  </span>
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
