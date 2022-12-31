import StyledSmallButton from "../Components/StyledSmallButton";

const ShoppingBasketPage = () => {
  return (
    <div className="shopping-basket">
      <div className="shopping-basket__form">
        <span className="shopping-basket__form--title">상품 ?개</span>
        <table className="shopping-basket__form--table">
          <thead>
            <tr>
              <th>체크박스</th>
              <th>이미지</th>
              <th>상품정보</th>
              <th>판매가</th>
              <th>수량</th>
              <th>배송비</th>
              <th>합계</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>체크박스</td>
              <td>이미지</td>
              <td>상품정보</td>
              <td>판매가</td>
              <td>수량</td>
              <td>배송비</td>
              <td>합계</td>
              <td>선택</td>
            </tr>
            <tr>
              <td>체크박스</td>
              <td>이미지</td>
              <td>상품정보</td>
              <td>판매가</td>
              <td>수량</td>
              <td>배송비</td>
              <td>합계</td>
              <td>선택</td>
            </tr>
            <tr>
              <td>체크박스</td>
              <td>이미지</td>
              <td>상품정보</td>
              <td>판매가</td>
              <td>수량</td>
              <td>배송비</td>
              <td>합계</td>
              <td>선택</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>asd</td>
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
