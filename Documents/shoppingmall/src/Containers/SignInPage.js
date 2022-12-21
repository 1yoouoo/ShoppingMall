import { useRef, useState } from "react";
import StyledButton from "../Components/Button";

const SignInPage = () => {
  // hook
  const idInput = useRef();
  const passwordInput = useRef();
  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });

  // function
  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log(idInput);
  };
  const onClickLogIn = () => {};
  const onClickJoinMember = () => {};

  return (
    <div className="loginpage">
      <div className="loginpage__wrapper">
        <form className="loginpage__form">
          <div className="loginpage__form--field">
            <div className="loginpage__form--id">
              <label className="loginpage__form--text">ID</label>
              <input
                className="loginpage__form--input"
                name="id"
                value={inputValue.id}
                ref={idInput}
                onChange={onChange}
              />
            </div>
            <div className="loginpage__form--password">
              <label className="loginpage__form--text">PASSWORD</label>
              <input
                className="loginpage__form--input"
                name="password"
                value={inputValue.password}
                ref={passwordInput}
                onChange={onChange}
              />
            </div>
            <StyledButton
              background="black"
              color="white"
              onClick={onClickLogIn}
              type="button"
            >
              LOG IN
            </StyledButton>
            <div className="loginpage__form--search">
              <span className="loginpage__search--id">-SEARCH ID</span>
              <span className="loginpage__search--password">
                -SEARCH PASSWORD
              </span>
            </div>
            <StyledButton type="button" background="default" color="black">
              JOIN MEMBER
            </StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
