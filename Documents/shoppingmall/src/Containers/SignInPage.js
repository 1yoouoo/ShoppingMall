import StyledButton from "../Components/Button";

const SignInPage = () => {
  return (
    <div className="loginpage">
      <div className="loginpage__wrapper">
        <form className="loginpage__form">
          <div className="loginpage__form--field">
            <div className="loginpage__form--id">
              <label className="loginpage__form--text">ID</label>
              <input className="loginpage__form--input" />
            </div>
            <div className="loginpage__form--password">
              <label className="loginpage__form--text">PASSWORD</label>
              <input className="loginpage__form--input" />
            </div>
            <StyledButton background="black" color="white">
              LOG IN
            </StyledButton>
            <div className="loginpage__form--search">
              <span className="loginpage__search--id">-SEARCH ID</span>
              <span className="loginpage__search--password">
                -SEARCH PASSWORD
              </span>
            </div>
            <StyledButton background="default" color="black">
              JOIN MEMBER
            </StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
