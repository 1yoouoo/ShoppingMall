import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../API/Api";

const ShoppingItemDetail = () => {
  const { item_id } = useParams();
  const [itemData, setItemData] = useState([]);
  const [test, setTest] = useState({
    item_id: "1",
    name: "",
    price: "",
    color: ["BLACK", "WHITE", "RED", "BLUE"],
    count: "",
  });

  useEffect(() => {
    API.getitem(item_id).then((data) => {
      data && setItemData(data);
      console.log(data);
    });
  }, []);

  const countLimit = (number) => {
    const result = [];
    for (let i = 1; i <= number; i++) {
      result.push(<option key={i}>{i}</option>);
    }
    return result;
  };
  return (
    <div className="shopping-item-detail">
      <div className="shopping-item-detail__form">
        <div className="shopping-item-detail__form--img">
          <img
            src={require("../Assets/shopping-list-sample-1.jpeg")}
            alt="item1"
          />
        </div>
        <div className="shopping-item-detail__form--text">
          <div className="shopping-item-detail__text--title">
            <span>{itemData.name}</span>
            <span>{itemData.price}</span>
          </div>
          <strong>*재고에 한해 오후 12시까지 주문 시 당일 발송!</strong>
          <br></br>
          <br></br>
          -14수 트윌 면 원단에 전면 자수 처리 <br></br>
          -5각 패널캡으로 이마가 닿는 부분(자수 부분)의 핏을 잡아주는 것이 특징
          <br></br>
          -깊이감이 있는 캡을 선호하는 분들에게 추천<br></br>
          -스트랩 백으로 사이즈 조절 가능 <br></br>
          -GUDO ratio ball cap 보다 사이즈를 한 치수 크게 제작하여 더 넉넉하게
          착용 가능 <br></br>
          <br></br>
          Fabric <br></br>면 100 <br></br>
          <br></br>
          Size(단위: cm) <br></br>F – 머리둘레(스트랩 제외) 55 모자 깊이 12.5
          챙길이 8<br></br>
          (스트랩은 3cm 에서 5~7cm 까지 조정 가능)<br></br>
          (사이즈 측정하는 위치와 방법에 따라 1~3cm의 오차가 있을 수 있습니다.)
          <br></br>
          <br></br>
          Model Size<br></br>
          Man – 171cm/ 58kg <br></br>
          Woman – 161cm / 46kg<br></br>
          <br></br>
          배송비 – 기본 3,000원 / 100,000원 이상 구매 시 무료 <br></br>
          제주도 및 도서산간 지역 6,000원 (무료배송 시 3,000원)
        </div>
        <div>
          <b>색상 : </b>
          <select name="color">
            {test.color.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div>
          <b>수량 : </b>
          <select name="count">{countLimit(20)}</select>
        </div>
      </div>
      <div className="shopping-item-detail__form--bottom"></div>
    </div>
  );
};

export default ShoppingItemDetail;
