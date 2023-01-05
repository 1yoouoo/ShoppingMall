import { useEffect, useRef, useState } from "react";
import API from "../API/Api";

const StockListPage = () => {
  const [stockList, setStockList] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const currentColor = useRef();

  //function
  const onClickDelete = async (item) => {
    const data = await API.itemdelete(item.item_id, selectedColor);
    if (data?.data.validate.code === "delete") {
      alert(data.data.validate.message);
      setSelectedColor();
    } else {
      alert("ERROR");
    }
    // FIXME
    // -> 삭제할 때 해당 row의 색상을 선택되도록 짜야함. 지금은 색상을 변경 후 해당 row 에서만 작동되도록 했음.. 좋지 못한 ux
    // 현재로썬 this 나 e.target처럼 해당 row data의 dom 접근을 잘 못하겠음 .. ㅜ
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedColor(e.target.value);
    console.log(selectedColor);
  };
  useEffect(() => {
    const getStockList = async () => {
      const data = await API.getstocklist();
      setStockList(data.data.data.content);
      console.log(data);
    };
    getStockList();
  }, [selectedColor]);
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
                <th className="shopping-basket__thead--name">색상</th>
                <th className="shopping-basket__thead--price">판매가</th>
                <th className="shopping-basket__thead--count">수량</th>
                <th className="shopping-basket__thead--count">저장</th>
              </tr>
            </thead>
            <tbody className="shopping-basket__tbody">
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
                      </td>
                      <td className="shopping-basket__tbody--price">
                        색상 :
                        <select
                          name="color"
                          onChange={handleChange}
                          ref={currentColor}
                        >
                          <option key="0">-</option>
                          {item.itemColorListResponse.map((option) => {
                            return (
                              <option
                                key={option.item_color_id}
                                value={option.item_color_id}
                              >
                                {option.color}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                      <td className="shopping-basket__tbody--price">
                        {item.price}원
                      </td>
                      <td className="shopping-basket__tbody--count">
                        <span>{item.count}</span>
                      </td>
                      <td className="shopping-basket__tbody--count">
                        <span>
                          <button onClick={() => onClickDelete(item)}>
                            상품삭제하기
                          </button>
                        </span>
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
