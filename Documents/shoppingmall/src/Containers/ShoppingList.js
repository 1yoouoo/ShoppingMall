import { useNavigate } from "react-router-dom";

const ShoppingList = ({ itemsData, sortList, sortingData, sort }) => {
  const navigate = useNavigate();

  const onClickTest = (item_id) => {
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
          {sort
            ? sortingData &&
              sortingData.map((item) => {
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
              })
            : itemsData.itemListResponses &&
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
