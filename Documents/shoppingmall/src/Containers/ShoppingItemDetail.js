import { useParams } from "react-router-dom";

const ShoppingItemDetail = () => {
  const { itemId } = useParams();
  return <div>{itemId}</div>;
};

export default ShoppingItemDetail;
