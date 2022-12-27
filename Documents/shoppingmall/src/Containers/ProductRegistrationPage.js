import { useMemo, useState } from "react";
import API from "../API/Api";

const ProductRegistrationPage = () => {
  const [fileImage, setFileImage] = useState("");

  // 데이터 절약 useMemo
  const previewImage = useMemo(() => {
    return fileImage ? (
      <span className="product-registration__form--sample">
        <img alt="sample" src={fileImage} />
      </span>
    ) : (
      <span className="product-registration__form--sample">
        <img src={require("../Assets/upload-img.png")} alt="" />
      </span>
    );
  }, [fileImage]);
  const [inputValue, setInputValue] = useState({
    name: "",
    price: "",
    stock: 0,
    kind: "TOP",
  });
  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    API.registration(inputValue.name, inputValue.price, inputValue.kind).then(
      (data) => {
        console.log(data);
        if (data.data.error === null) {
          alert(data.data.validate?.message);
        } else {
          alert(data.data.error?.message);
        }
      }
    );
  };
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="product-registration">
      <div className="product-registration__form">
        <div className="product-registration__form--left">
          <h2>이미지 업로드</h2>
          {previewImage}
          <span>
            <input type="file" accept="/image/*" onChange={saveFileImage} />
          </span>
        </div>
        <div className="product-registration__form--right">
          <span>
            <div>제목 : </div>
            <input name="name" onChange={onChange} />
          </span>
          <span>
            <div>가격 : </div>
            <input name="price" onChange={onChange} />
          </span>
          <span>
            <select onChange={onChange} name="kind" value={inputValue.kind}>
              <option key="TOP" value="TOP">
                TOP
              </option>
              <option key="BOTTOM" value="BOTTOM">
                BOTTOM
              </option>
            </select>
          </span>
        </div>
      </div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default ProductRegistrationPage;
