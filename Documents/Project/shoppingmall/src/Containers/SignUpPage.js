import API from "../API/Api";
import { useState } from "react";
import StyledButton from "../Components/StyledButton";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  //hook
  const navigate = useNavigate();
  //state
  const [inputValue, setInputValue] = useState({
    login_id: "",
    password: "",
    name: "",
    phone_number: "010",
    email: "",
  });
  //function
  const onChangeValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  // API CALL
  const handleSubmit = async () => {
    const data = await API.signup(
      inputValue.login_id,
      inputValue.password,
      inputValue.name,
      inputValue.phone_number,
      inputValue.email
    );
    if (data.data.validate === null) {
      alert(data.data.error?.message);
    } else {
      alert("회원가입 성공 !");
      navigate("/signin");
    }
  };

  return (
    <div className="signup">
      <div className="signup__line"></div>
      <div className="signup__form">
        <table className="signup__form--table">
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input
                  name="login_id"
                  onChange={onChangeValue}
                  value={inputValue.login_id}
                />
                <span>(영어소문자/숫자, 8글자 이상)</span>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  name="password"
                  onChange={onChangeValue}
                  value={inputValue.password}
                />
                <span>(8글자 이상, 대문자 포함)</span>
              </td>
            </tr>
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
                <button>인증번호받기</button>
                <span> - 빼고 입력 해 주세요</span>
              </td>
            </tr>
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
