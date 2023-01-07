import { useEffect, useState } from "react";
import API from "../API/Api";

const OrderPage = () => {
  // token
  const token = localStorage.getItem("token");
  // state
  const [orderList, setOrderList] = useState([]);
  //useEffect
  useEffect(() => {
    // 첫 렌더링 시 장바구니 조회
    const getOrderList = async () => {
      const data = await API.getorderlist(token);
      setOrderList(data.data.data.content);
    };

    getOrderList();
  }, [token]);

  return (
    <>
      <div className="shopping-basket">
        <div className="shopping-basket__form">
          {orderList &&
            orderList?.map((orderItem) => {
              return (
                <span>
                  <div id="order-number">주문 번호 {orderItem.orders_id}</div>
                  <table className="shopping-basket__form--table">
                    <thead className="shopping-basket__thead">
                      <tr>
                        <th className="shopping-basket__thead--img">이미지</th>
                        <th className="shopping-basket__thead--name">
                          상품정보
                        </th>
                        <th className="shopping-basket__thead--count">색상</th>
                        <th className="shopping-basket__thead--count">수량</th>
                        <th className="shopping-basket__thead--price">
                          구매가
                        </th>
                        <th className="shopping-basket__thead--price">
                          총 구매가
                        </th>
                      </tr>
                    </thead>
                    {orderItem.orderItem_content.map((content) => {
                      return (
                        <tbody className="shopping-basket__tbody">
                          <tr>
                            <td className="shopping-basket__tbody--img">
                              <img
                                src={require("../Assets/shopping-list-sample-1.jpeg")}
                                alt=""
                              />
                            </td>
                            <td className="shopping-basket__tbody--name">
                              {content.name}
                            </td>
                            <td className="shopping-basket__tbody--price">
                              {content.color}
                            </td>
                            <td className="shopping-basket__tbody--price">
                              {content.count}개
                            </td>
                            <td className="shopping-basket__tbody--count">
                              {content.price}원
                            </td>
                            <td className="shopping-basket__tbody--count">
                              {content.totalPrice}원
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                  <div className="shopping-basket__total">
                    <table className="shopping-basket__total--table">
                      <thead>
                        <tr>
                          <td>총 상품수량</td>
                          <td></td>
                          <td>총 결제금액</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{orderItem.order_count}개</td>
                          <td></td>
                          <td>{orderItem.order_price}원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr></hr>
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default OrderPage;
