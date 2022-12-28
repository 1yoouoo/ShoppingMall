import { useEffect, useState } from "react";
import API from "../API/Api";
import StyledCategory from "../Components/StyledCategory";
import ShoppingList from "./ShoppingList";

const ShopingPage = () => {
  // state
  const categoryList = [{ name: "ALL" }, { name: "TOP" }, { name: "BOTTOM" }];
  const page = 0;
  const [itemsData, setItemsData] = useState([]);
  const [sortingData, setSortingData] = useState([]);
  const [sort, setSort] = useState(false);
  useEffect(() => {
    API.getitems(page).then((data) => {
      console.log(data);
      data && setItemsData(data);
    });
  }, []);
  // hook
  const sortList = ["LOW PRICE", "HIGH PRICE", "NEW", "HIT"];

  //function
  const onClickCategory = (e) => {
    let kind = e.target.innerHTML;
    if (kind === "ALL") {
      setSortingData(itemsData.itemListResponses);
    } else {
      setSortingData(
        itemsData.itemListResponses.filter((item) => item.kind === kind)
      );
    }
    setSort(true);
  };

  // sortData만
  return (
    <>
      <div className="shopping-category">
        <div className="shopping-category__form">
          {categoryList.map((category) => {
            return (
              <StyledCategory
                title={category.name}
                key={category.name}
                onClickCategory={onClickCategory}
                sort={sort}
              />
            );
          })}
        </div>
      </div>

      <ShoppingList
        itemsData={itemsData}
        sortList={sortList}
        sort={sort}
        sortingData={sortingData}
      />
    </>
  );
};

export default ShopingPage;
