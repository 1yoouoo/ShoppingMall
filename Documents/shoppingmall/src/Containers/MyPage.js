import { useEffect, useState } from "react";
import API from "../API/Api";

const MyPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    API.getuser(token).then((data) => {
      console.log(data);
      setUserData({
        ...userData,
        login_id: data.data.data.login_id,
        name: data.data.data.name,
        phone_number: data.data.data.phone_number,
        email: data.data.data.email,
      });
    });
  }, []);
  const [changeUserData, setChangeUserData] = useState(false);
  const [userData, setUserData] = useState({
    login_id: "",
    name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  //function
  const onClickChange = () => {
    setChangeUserData(!changeUserData);
  };
  const onClickSave = () => {
    setChangeUserData(!changeUserData);
    console.log(userData);
  };
  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="my-page">
      <form className="my-page__form">
        <span className="my-page__form--login-id">
          <label>아이디 : </label>
          <span>{userData && userData.login_id}</span>
        </span>
        <span className="my-page__form--name">
          <label>이름 : </label>
          <span>{userData && userData.name}</span>
        </span>
        <span className="my-page__form--phone_number">
          <label>휴대폰 : </label>
          {changeUserData ? (
            <input
              placeholder={userData && userData.phone_number}
              onChange={onChange}
              name="phone_number"
              value={userData.phone_number}
            />
          ) : (
            <span>{userData && userData.phone_number}</span>
          )}
        </span>
        <span className="my-page__form--email">
          <label>이메일 : </label>
          {changeUserData ? (
            <input
              placeholder={userData && userData.email}
              onChange={onChange}
              name="email"
              value={userData.email}
            />
          ) : (
            <span>{userData && userData.email}</span>
          )}
        </span>
        {changeUserData && (
          <span>
            <label>비밀번호 :</label>
            <input
              onChange={onChange}
              name="password"
              value={userData.password}
            />
          </span>
        )}
        <span>
          {changeUserData ? (
            <button type="button" onClick={onClickSave}>
              정보 저장하기
            </button>
          ) : (
            <button type="button" onClick={onClickChange}>
              정보 수정하기
            </button>
          )}
        </span>
      </form>
    </div>
  );
};

export default MyPage;
