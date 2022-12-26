const ShoppingList = () => {
  const sortList = ["LOW PRICE", "HIGH PRICE", "NAME", "NEW", "HIT"];
  return (
    <div className="shopping-list">
      <div className="shopping-list__form">
        <div className="shopping-list__form--top">
          <span className="shopping-list__top--total">
            TOTAL <b>954</b> ITEMS
          </span>
          <span>
            {sortList.map((sort) => {
              return (
                <span className="shopping-list__top--sort" key={sort}>
                  {sort}
                </span>
              );
            })}
          </span>
        </div>
        <div className="shopping-list__form--bottom">
          <div className="shopping-list__item">
            <img
              src={require("../Assets/shopping-list-sample-1.jpeg")}
              alt="item1"
            />
            <span>title</span>
            <span>price</span>
          </div>
          <div className="shopping-list__item">
            <img
              src={require("../Assets/shopping-list-sample-2.jpeg")}
              alt=""
            />
            <span>title</span>
            <span>price</span>
          </div>
          <div className="shopping-list__item">
            <img
              src={require("../Assets/shopping-list-sample-2.jpeg")}
              alt=""
            />
            <span>당일발송 어쩌구 저쩌구</span>
            <span>39,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
