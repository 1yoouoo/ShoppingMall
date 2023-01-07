import { useEffect, useState } from "react";
import API from "../API/Api";

const MyPage = () => {
  //token
  const token = localStorage.getItem("token");
  //state
  const [isChangedUserData, setIsChangedUserData] = useState(false);
  const [userData, setUserData] = useState({
    login_id: "",
    name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  //function
  const onClickChange = () => {
    setIsChangedUserData(!isChangedUserData);
  };
  const onClickSave = async () => {
    const data = await API.changeuser(
      token,
      userData.password,
      userData.phone_number,
      userData.email
    );
    if (data.data.validate === null) {
      //error
      alert(data.data.error.message);
    } else {
      // success
      alert(data.data.validate.message);
      setIsChangedUserData(!isChangedUserData);
    }
  };
  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  //useEffect
  useEffect(() => {
    const getUserApi = async () => {
      const data = await API.getuser(token);
      setUserData({
        ...userData,
        login_id: data.data.data.login_id,
        name: data.data.data.name,
        phone_number: data.data.data.phone_number,
        email: data.data.data.email,
      });
    };
    getUserApi();
  }, []);
  return (
    <div className="my-page">
      <form className="my-page__form">
        <span className="my-page__form--login-id">
          <label>아이디 : </label>
          <span>{userData.login_id}</span>
        </span>
        <span className="my-page__form--name">
          <label>이름 : </label>
          <span>{userData.name}</span>
        </span>
        <span className="my-page__form--phone_number">
          <label>휴대폰 : </label>
          {isChangedUserData ? (
            <input
              placeholder={userData.phone_number}
              onChange={onChange}
              name="phone_number"
              value={userData.phone_number}
            />
          ) : (
            <span>{userData.phone_number}</span>
          )}
        </span>
        <span className="my-page__form--email">
          <label>이메일 : </label>
          {isChangedUserData ? (
            <input
              placeholder={userData.email}
              onChange={onChange}
              name="email"
              value={userData.email}
            />
          ) : (
            <span>{userData.email}</span>
          )}
        </span>
        {isChangedUserData && (
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
          {isChangedUserData ? (
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
