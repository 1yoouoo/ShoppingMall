import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/Api";
import StyledButton from "../Components/StyledButton";
import StyledSmallButton from "../Components/StyledSmallButton";

const ShoppingBasketPage = () => {
  const token = localStorage.getItem("token");

  //state
  const navigate = useNavigate();
  const [basketItemsList, setBasketItemsList] = useState([]);
  const [checkedItemList, setCheckedItemList] = useState([]);
  const [checkedIdList, setCheckedIdList] = useState([]);
  const [selectedItemsPrice, setSelectedItemsPrice] = useState(0);
  //hook

  //function
  const handleCheckedAll = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = basketItemsList.map((el) => el.cart_item_id);
      const itemArray = basketItemsList.map((el) => el);
      setCheckedIdList(idArray);
      setCheckedItemList(itemArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckedIdList([]);
      setCheckedItemList([]);
    }
  };
  const handleCheckedItem = (checked, cart_item_id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckedIdList((prev) => [...prev, cart_item_id]);
      let eachItem = basketItemsList.find(
        (item) => item.cart_item_id === cart_item_id
      );
      setCheckedItemList((prev) => [...prev, eachItem]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열
      setCheckedIdList(checkedIdList.filter((el) => el !== cart_item_id)); // 선택 해제된 id 제거
      setCheckedItemList(
        checkedItemList.filter((item) => item.cart_item_id !== cart_item_id)
      ); // 선택 해제된 item 제거
    }
  };
  const hanbleDeletedAll = () => {
    setBasketItemsList([]);
  };
  const hanbleDeletedItem = async (cart_item_id) => {
    const data = await API.deletebasket(token, cart_item_id);
    console.log(data);
    if (data?.data.validate.code === "delete") {
      setBasketItemsList(
        basketItemsList.filter((item) => item.cart_item_id !== cart_item_id)
      ); // 선택 해제된 item 제거
    } else {
      alert(data?.data.error.message);
    }
  };
  const calculatePrice = () => {
    let eachItemPrice = 0;
    checkedItemList.map((item) => {
      eachItemPrice += item.price * item.count;
      return eachItemPrice;
    });
    setSelectedItemsPrice(eachItemPrice);
    console.log(selectedItemsPrice);
  };
  const onClickPlus = async (item) => {
    item.count++;
    const data = await API.updatecountbasket(item.cart_item_id, item.count);
    if (data?.data.validate.code === "update") {
      setBasketItemsList((prev) => [...prev]);
    } else {
      alert(data?.data.error.message);
    }
  };
  const onClickMinus = async (item) => {
    item.count--;
    const data = await API.updatecountbasket(item.cart_item_id, item.count);
    if (item.count > 0) {
      if (data?.data.validate.code === "update") {
        setBasketItemsList((prev) => [...prev]);
      } else {
        alert(data?.data.error.message);
      }
      setBasketItemsList((prev) => [...prev]);
    } else {
      setBasketItemsList(
        basketItemsList.filter((e) => e.cart_item_id !== item.cart_item_id)
      );
    }
  };

  useEffect(() => {
    // 장바구니 체크박스
    calculatePrice();
  });

  useEffect(() => {
    // 첫 렌더링 시 장바구니 조회
    const getBasket = async () => {
      const data = await API.getbasket(token);
      setBasketItemsList(data?.cartItemResponseList);
      console.log(data);
    };
    getBasket();
  }, [token]);

  return (
    <>
      {basketItemsList?.length !== 0 ? (
        <div className="shopping-basket">
          <div className="shopping-basket__form">
            <span className="shopping-basket__form--title">
              상품 {basketItemsList?.length}개
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
                        checkedIdList?.length === basketItemsList?.length
                          ? true
                          : false
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
                {basketItemsList?.map((item) => {
                  return (
                    <tr key={item.cart_item_id}>
                      <td className="shopping-basket__tbody--checkBox">
                        <input
                          type="checkbox"
                          name={`select-${item.cart_item_id}`}
                          onChange={(e) =>
                            handleCheckedItem(
                              e.target.checked,
                              item.cart_item_id
                            )
                          }
                          checked={
                            checkedIdList.includes(item.cart_item_id)
                              ? true
                              : false
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
                        <b>{item.name}</b>
                        <br></br>
                        [색상 : {item.color}]
                      </td>
                      <td className="shopping-basket__tbody--price">
                        {item.price}원
                      </td>
                      <td className="shopping-basket__tbody--count">
                        <span>
                          <span>{item.count}</span>
                          <button onClick={() => onClickPlus(item)}>+</button>
                          <button onClick={() => onClickMinus(item)}>-</button>
                        </span>
                      </td>
                      <td className="shopping-basket__tbody--deliveryFee">
                        무료
                      </td>
                      <td className="shopping-basket__tbody--totalPrice">
                        {item.price * item.count}원
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
                          onClick={() => hanbleDeletedItem(item.cart_item_id)}
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
                    상품구매금액{" "}
                    <b>
                      {[selectedItemsPrice]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </b>
                    원 + 배송비 0원 = 합계 :
                    <span id="totalPrice">
                      {[selectedItemsPrice]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
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
                    <td>
                      {[selectedItemsPrice]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </td>
                    <td>0원</td>
                    <td>
                      ={" "}
                      {[selectedItemsPrice]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </td>
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
                  onClick={() => navigate(-1)}
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
