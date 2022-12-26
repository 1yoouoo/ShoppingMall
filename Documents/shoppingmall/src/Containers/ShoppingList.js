const ShoppingList = () => {
  const sortList = ["LOW PRICE", "HIGH PRICE", "NAME", "NEW", "HIT"];
  const dummyList = [
    {
      id: 1,
      img_src: require("../Assets/shopping-list-sample-1.jpeg"),
      title: "제목1 테스트 입니다",
      price: "39,000",
    },
    {
      id: 2,
      img_src: require("../Assets/shopping-list-sample-2.jpeg"),
      title: "제목2 테스트 입니다",
      price: "49,000",
    },
    {
      id: 3,
      img_src: require("../Assets/shopping-list-sample-2.jpeg"),
      title: "제목3 테스트 입니다",
      price: "59,000",
    },
  ];
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
          {dummyList.map((item) => {
            return (
              <div className="shopping-list__item" key={item.id}>
                <img src={item.img_src} alt="item1" />
                <span className="shopping-list__item--title">{item.title}</span>
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
