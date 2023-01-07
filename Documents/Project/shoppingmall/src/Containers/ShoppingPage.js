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

  //function
  const onClickPageNumber = (e) => {
    let pageNuberClick = e.target.innerHTML;
    setCurrentPage(pageNuberClick);
  };
  //useEffect
  useEffect(() => {
    API.getitems(currentPage - 1).then((data) => {
      data && setItemsData(data);
    });
  }, [currentPage]);
  return (
    <>
      <div className="shopping-category">
        <div className="shopping-category__form">
          {categoryList.map((category) => {
            return <StyledCategory title={category.name} key={category.name} />;
          })}
        </div>
      </div>
      <ShoppingList itemsData={itemsData} />
      <PageNation
        currentPage={currentPage}
        totalPages={itemsData.totalPages}
        onClickPageNumber={onClickPageNumber}
      />
    </>
  );
};

export default ShopingPage;
