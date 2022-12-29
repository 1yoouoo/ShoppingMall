import { useEffect, useState } from "react";
import API from "../API/Api";
import PageNation from "../Components/PageNation";
import StyledCategory from "../Components/StyledCategory";
import ShoppingList from "./ShoppingList";

const ShopingPage = () => {
  // state
  const categoryList = [{ name: "ALL" }, { name: "TOP" }, { name: "BOTTOM" }];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsData, setItemsData] = useState([]);
  const [sortingData, setSortingData] = useState([]);
  const [sort, setSort] = useState(false);
  useEffect(() => {
    API.getitems(currentPage - 1).then((data) => {
      console.log(data);
      data && setItemsData(data);
    });
  }, [currentPage]);
  // hook
  const sortList = ["LOW PRICE", "HIGH PRICE", "NEW", "HIT"];

  //function
  const onClickPageNumber = (e) => {
    let pageNuberClick = e.target.innerHTML;
    setCurrentPage(pageNuberClick);
    console.log(currentPage);
  };
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
      <PageNation
        currentPage={currentPage}
        totalPages={itemsData.totalPages}
        onClickPageNumber={onClickPageNumber}
      />
    </>
  );
};

export default ShopingPage;
