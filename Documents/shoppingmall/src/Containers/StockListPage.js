import { useEffect, useState } from "react";
import API from "../API/Api";

const StockListPage = () => {
  const [stockList, setStockList] = useState();
  useEffect(() => {
    const getStockList = async () => {
      const data = await API.getstocklist();
      setStockList(data.data.data.content);
    };
    getStockList();
  }, []);
  return (
    <>
      <div className="shopping-basket">
        <div className="shopping-basket__form">
          <span className="shopping-basket__form--title">
            상품 {stockList?.length}개
          </span>
          <table className="shopping-basket__form--table">
            <thead className="shopping-basket__thead">
              <tr>
                <th className="shopping-basket__thead--img">이미지</th>
                <th className="shopping-basket__thead--name">상품정보</th>
                <th className="shopping-basket__thead--price">판매가</th>
                <th className="shopping-basket__thead--count">수량</th>
                <th className="shopping-basket__thead--count">저장</th>
              </tr>
            </thead>
            <tbody className="shopping-basket__tbody">
              {console.log(stockList)}
              {stockList &&
                stockList?.map((item) => {
                  return (
                    <tr key={item.item_id}>
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
                        <span>{item.count}</span>
                      </td>
                      <td className="shopping-basket__tbody--count">
                        <span>저장하기</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StockListPage;
