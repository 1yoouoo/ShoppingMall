import { useState } from "react";

const ProductRegistrationPage = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    detail: "",
    price: "",
    stock: "",
  });
  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    console.log(inputValue);
  };
  return (
    <div className="product-registration">
      <div className="product-registration__form">
        <div className="product-registration__form--left">
          <span>
            <input type="file" />
          </span>
        </div>
        <div className="product-registration__form--right">
          <span>
            <div>제목 : </div>
            <input name="title" onChange={onChange} />
          </span>
          <span>
            <div>설명 : </div>
            <textarea name="detail" onChange={onChange} />
          </span>
          <span>
            <div>가격 : </div>
            <input name="price" onChange={onChange} />
          </span>
          <span>
            <div>재고 : </div>
            <input name="stock" onChange={onChange} />
          </span>
        </div>
      </div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default ProductRegistrationPage;
