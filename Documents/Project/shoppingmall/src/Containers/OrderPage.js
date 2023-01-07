import { useEffect } from "react";
import API from "../API/Api";

const OrderPage = () => {
  // token
  const token = localStorage.getItem("token");

  useEffect(() => {
    // 첫 렌더링 시 장바구니 조회
    const getOrderList = async () => {
      const data = await API.getorderlist(token);
      console.log(data);
    };
    getOrderList();
  }, [token]);
  return (
    <>
      <div className="shopping-basket">
        <div className="shopping-basket__form">
          <span className="shopping-basket__form--title">주문 내역</span>
          <table className="shopping-basket__form--table">
            <thead className="shopping-basket__thead">
              <tr>
                <th className="shopping-basket__thead--img">이미지</th>
                <th className="shopping-basket__thead--name">상품정보</th>
                <th className="shopping-basket__thead--name">색상</th>
                <th className="shopping-basket__thead--price">판매가</th>
                <th className="shopping-basket__thead--count">수량</th>
              </tr>
            </thead>
            <tbody className="shopping-basket__tbody">
              <tr>
                <td className="shopping-basket__tbody--img">
                  <img
                    src={require("../Assets/shopping-list-sample-1.jpeg")}
                    alt=""
                  />
                </td>
                <td className="shopping-basket__tbody--name">
                  <b>asd</b>
                </td>
                <td className="shopping-basket__tbody--price">색상 :</td>
                <td className="shopping-basket__tbody--price">asd</td>
                <td className="shopping-basket__tbody--count">
                  <span></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
