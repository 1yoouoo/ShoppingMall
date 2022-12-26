import { useMemo, useState } from "react";

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
