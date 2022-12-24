import API from "../API/Api";
import { useState } from "react";
import StyledButton from "../Components/StyledButton";

const SignUpPage = () => {
  const [inputValue, setInputValue] = useState({
    login_id: "",
    password: "",
    password_check: "",
    phone_number: "010",
    name: "",
    email: "",
  });
  const onChangeValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(inputValue);
  };

  //function
  const onClickPN = () => {
    console.log(inputValue);
  };

  const handleSubmit = () => {
    API.signup(
      inputValue.login_id,
      inputValue.password,
      inputValue.phone_number,
      inputValue.name,
      inputValue.email
    ).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="signup">
      <div className="signup__line"></div>
      <div className="signup__form">
        <table className="signup__form--table">
          <tbody>
            {/* 아이디 */}
            <tr>
              <td>아이디</td>
              <td>
                <input
                  name="login_id"
                  onChange={onChangeValue}
                  value={inputValue.login_id}
                />
                <span>(영어소문자/숫자, 4~16자)</span>
              </td>
            </tr>
            {/* 비밀번호 */}
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  name="password"
                  onChange={onChangeValue}
                  value={inputValue.password}
                />
                <span>
                  (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
                </span>
              </td>
            </tr>
            {/* 비밀번호 확인 */}
            <tr>
              <td>비밀번호확인</td>
              <td>
                <input
                  name="password_check"
                  onChange={onChangeValue}
                  value={inputValue.password_check}
                />
              </td>
            </tr>
            {/* 이름 */}
            <tr>
              <td>이름</td>
              <td>
                <input
                  name="name"
                  onChange={onChangeValue}
                  value={inputValue.name}
                />
              </td>
            </tr>
            {/* 휴대전화 */}
            <tr>
              <td>휴대전화</td>
              <td>
                <input
                  type="text"
                  size="4"
                  name="phone_number"
                  onChange={onChangeValue}
                  value={inputValue.phone_number}
                />
                <button onClick={onClickPN}>인증번호받기</button>
                <span> - 빼고 입력 해 주세요</span>
              </td>
            </tr>
            {/* 이메일 */}
            <tr>
              <td>이메일</td>
              <td>
                <input
                  name="email"
                  onChange={onChangeValue}
                  value={inputValue.email}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="signup__button">
        <StyledButton background="black" color="white" onClick={handleSubmit}>
          JOIN MEMBER
        </StyledButton>
      </div>
    </div>
  );
};
export default SignUpPage;
