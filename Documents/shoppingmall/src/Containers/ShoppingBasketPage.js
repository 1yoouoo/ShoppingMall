import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../Components/StyledButton";
import StyledSmallButton from "../Components/StyledSmallButton";

const ShoppingBasketPage = () => {
  const [dummyList, setDummyList] = useState([
    {
      id: 1,
      image: "../Assets/shopping-list-sample-1.jpeg",
      name: "이것은 테스트1 입니다.[color:red/size:M]",
      price: 30000,
      count: 2,
      deliveryFee: "무료 배송",
      totalPrice: 60000,
    },
    {
      id: 2,
      image: "../Assets/shopping-list-sample-1.jpeg",
      name: "이것은 테스트2 입니다.",
      price: 40000,
      count: 2,
      deliveryFee: "무료 배송",
      totalPrice: 80000,
    },
    {
      id: 3,
      image: "../Assets/shopping-list-sample-1.jpeg",
      name: "이것은 테스트3 입니다.",
      price: 20000,
      count: 1,
      deliveryFee: "무료 배송",
      totalPrice: 20000,
    },
  ]);

  //state
  const navigate = useNavigate();
  const [checkedItemList, setCheckedItemList] = useState([]);
  const [checkedIdList, setCheckedIdList] = useState([]);
  const [selectedItemsPrice, setSelectedItemsPrice] = useState(0);
  //hook
  useEffect(() => {
    let eachItemPrice = 0;
    checkedItemList.map((item) => (eachItemPrice += item.totalPrice));
    setSelectedItemsPrice(eachItemPrice);
    console.log(selectedItemsPrice);
    console.log(dummyList.length === 0);
  }, [checkedItemList]);

  //function
  const handleCheckedAll = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      const itemArray = [];
      dummyList.forEach((el) => idArray.push(el.id));
      dummyList.forEach((el) => itemArray.push(el));
      setCheckedIdList(idArray);
      setCheckedItemList(itemArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckedIdList([]);
      setCheckedItemList([]);
    }
    console.log(checkedIdList);
  };
  const handleCheckedItem = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckedIdList((prev) => [...prev, id]);
      let eachItem = dummyList.find((item) => item.id === id);
      setCheckedItemList((prev) => [...prev, eachItem]);
      console.log(checkedItemList);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열
      setCheckedIdList(checkedIdList.filter((el) => el !== id)); // 선택 해제된 id 제거
      setCheckedItemList(checkedItemList.filter((item) => item.id !== id)); // 선택 해제된 item 제거
    }
    console.log("checkedIdList", checkedIdList);
  };
  const hanbleDeletedAll = () => {
    setDummyList([]);
  };
  const hanbleDeletedItem = () => {};
  return (
    <>
      {dummyList.length !== 0 ? (
        <div className="shopping-basket">
          <div className="shopping-basket__form">
            <span className="shopping-basket__form--title">
              상품 {dummyList.length}개
            </span>
            <table className="shopping-basket__form--table">
              <thead className="shopping-basket__thead">
                <tr>
                  <th className="shopping-basket__thead--checkBox">
                    <input
                      type="checkbox"
                      name="select-all"
                      onChange={(e) => {
                        handleCheckedAll(e.target.checked);
                      }}
                      checked={
                        checkedIdList.length === dummyList.length ? true : false
                      }
                    />
                  </th>
                  <th className="shopping-basket__thead--img">이미지</th>
                  <th className="shopping-basket__thead--name">상품정보</th>
                  <th className="shopping-basket__thead--price">판매가</th>
                  <th className="shopping-basket__thead--count">수량</th>
                  <th className="shopping-basket__thead--deliveryFee">
                    배송비
                  </th>
                  <th className="shopping-basket__thead--totalPrice">합계</th>
                  <th className="shopping-basket__thead--button">선택</th>
                </tr>
              </thead>
              <tbody className="shopping-basket__tbody">
                {dummyList.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="shopping-basket__tbody--checkBox">
                        <input
                          type="checkbox"
                          name={`select-${item.id}`}
                          onChange={(e) =>
                            handleCheckedItem(e.target.checked, item.id)
                          }
                          checked={
                            checkedIdList.includes(item.id) ? true : false
                          }
                        />
                      </td>
                      <td className="shopping-basket__tbody--img">
                        <img
                          src={require("../Assets/shopping-list-sample-1.jpeg")}
                          alt=""
                        />
                      </td>
                      <td className="shopping-basket__tbody--name">
                        {item.name}
                      </td>
                      <td className="shopping-basket__tbody--price">
                        {item.price}원
                      </td>
                      <td className="shopping-basket__tbody--count">
                        {item.count}
                      </td>
                      <td className="shopping-basket__tbody--deliveryFee">
                        {item.deliveryFee}
                      </td>
                      <td className="shopping-basket__tbody--totalPrice">
                        {item.totalPrice}원
                      </td>
                      <td className="shopping-basket__tbody--button">
                        <StyledSmallButton
                          background="#e6e6e6"
                          color="black"
                          border="none"
                        >
                          주문하기
                        </StyledSmallButton>
                        <StyledSmallButton
                          background="#e6e6e6"
                          color="black"
                          border="none"
                        >
                          삭제하기
                        </StyledSmallButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="shopping-basket__tfoot">
                <tr className="shopping-basket__tfoot--summary">
                  <td colSpan={2}>[기본 배송]</td>
                  <td colSpan={6}>
                    상품구매금액 <b>{selectedItemsPrice}</b>원 + 배송비 0원 =
                    합계 :<span id="totalPrice"> {selectedItemsPrice}원</span>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="shopping-basket__form--delete">
              <StyledSmallButton
                background="#e6e6e6"
                color="black"
                border="none"
              >
                삭제하기
              </StyledSmallButton>
              <StyledSmallButton
                background="white"
                color="black"
                border="1px solid #ccc"
                onClick={hanbleDeletedAll}
              >
                장바구니 비우기
              </StyledSmallButton>
            </div>
            <div className="shopping-basket__total">
              <table className="shopping-basket__total--table">
                <thead>
                  <tr>
                    <td>총 상품금액</td>
                    <td>총 배송비</td>
                    <td>총 결제금액</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedItemsPrice}원</td>
                    <td>0원</td>
                    <td>= {selectedItemsPrice}원</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="shopping-basket__form--order">
              <span>
                <StyledSmallButton
                  background="black"
                  color="white"
                  border="none"
                >
                  전체상품주문
                </StyledSmallButton>
                <StyledSmallButton
                  background="#e6e6e6"
                  color="black"
                  border="none"
                >
                  선택상품주문
                </StyledSmallButton>
              </span>
              <span>
                <StyledSmallButton
                  background="white"
                  color="black"
                  border="1px solid #ccc"
                >
                  쇼핑계속하기
                </StyledSmallButton>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-basket">
          <img src={require("../Assets/empty-basket-baemin.png")} alt="" />
          <StyledButton
            background="white"
            color="black"
            border="1px solid #ccc"
            onClick={() => navigate("/homepage")}
          >
            홈으로 가기
          </StyledButton>
        </div>
      )}
    </>
  );
};

export default ShoppingBasketPage;
