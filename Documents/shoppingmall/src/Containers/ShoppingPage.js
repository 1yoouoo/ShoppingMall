import StyledCategory from "../Components/StyledCategory";

const ShopingPage = () => {
  // state
  const categoryList = ["new 5%", "best", "outer", "top", "bottom", "acc"];

  //function

  return (
    <div className="shopping-category">
      <div className="shopping-category__form">
        {categoryList.map((category) => {
          return <StyledCategory title={category} key={category} />;
        })}
      </div>
    </div>
  );
};

export default ShopingPage;
