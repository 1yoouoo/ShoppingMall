import StyledSmallButton from "../Components/StyledSmallButton";

const ShoppingBasketPage = () => {
  const dummyList = [
    {
      id: 1,
      checked: false,
      image: "../Assets/shopping-list-sample-1.jpeg",
      name: "이것은 테스트1 입니다.",
      price: "30,000",
      count: "2",
      deliveryFee: "무료 배송",
      totalPrice: "60,000",
    },
    {
      id: 2,
      checked: false,
      image: "../Assets/shopping-list-sample-1.jpeg",
      name: "이것은 테스트2 입니다.",
      price: "40,000",
      count: "2",
      deliveryFee: "무료 배송",
      totalPrice: "80,000",
    },
    {
      id: 3,
      checked: false,
      image: "../Assets/shopping-list-sample-1.jpeg",
      name: "이것은 테스트3 입니다.",
      price: "20,000",
      count: "1",
      deliveryFee: "무료 배송",
      totalPrice: "20,000",
    },
  ];
  return (
    <div className="shopping-basket">
      <div className="shopping-basket__form">
        <span className="shopping-basket__form--title">상품 ?개</span>
        <table className="shopping-basket__form--table">
          <thead className="shopping-basket__thead">
            <tr>
              <th className="shopping-basket__thead--checkBox">
                <input type="checkbox" />
              </th>
              <th className="shopping-basket__thead--img">이미지</th>
              <th className="shopping-basket__thead--name">상품정보</th>
              <th className="shopping-basket__thead--price">판매가</th>
              <th className="shopping-basket__thead--count">수량</th>
              <th className="shopping-basket__thead--deliveryFee">배송비</th>
              <th className="shopping-basket__thead--totalPrice">합계</th>
              <th className="shopping-basket__thead--button">선택</th>
            </tr>
          </thead>
          <tbody className="shopping-basket__tbody">
            {dummyList.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="shopping-basket__tbody--checkBox">
                    <input type="checkbox" />
                  </td>
                  <td className="shopping-basket__tbody--img">
                    <img
                      src={require("../Assets/shopping-list-sample-1.jpeg")}
                      alt=""
                    />
                  </td>
                  <td className="shopping-basket__tbody--name">{item.name}</td>
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
              <td colspan="2">[기본 배송]</td>
              <td colspan="6">
                상품구매금액 <b>231,000</b>원 + 배송비 0원 = 합계 :
                <span id="totalPrice"> 231,000원</span>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="shopping-basket__form--delete">
          <StyledSmallButton background="#e6e6e6" color="black" border="none">
            삭제하기
          </StyledSmallButton>
          <StyledSmallButton
            background="white"
            color="black"
            border="1px solid #ccc"
          >
            장바구니 비우기
          </StyledSmallButton>
        </div>
        <div className="shopping-basket__form--total">
          <form>총상품금액</form>
        </div>
        <div className="shopping-basket__form--order">
          <span>
            <StyledSmallButton background="black" color="white" border="none">
              전체상품주문
            </StyledSmallButton>
            <StyledSmallButton background="#e6e6e6" color="black" border="none">
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
  );
};

export default ShoppingBasketPage;
