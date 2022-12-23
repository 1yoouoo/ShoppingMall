import StyledButton from "../Components/Button";

const SignUpPage = () => {
  return (
    <div className="signup">
      <div className="">
        <form>
          {/* 아이디 */}
          <div>
            <label></label>
            <input />
            <span></span>
          </div>
          {/* 비밀번호 */}
          <div>
            <label></label>
            <input />
            <span></span>
          </div>
          {/* 비밀번호 확인 */}
          <div>
            <label></label>
            <input />
          </div>
          {/* 이름 */}
          <div>
            <label></label>
            <input />
          </div>
          {/* 휴대전화 */}
          <div>
            <label></label>
            <input />
            <button></button>
          </div>
          {/* 이메일 */}
          <div>
            <label></label>
            <input />
          </div>
        </form>
      </div>
      <div>test</div>
      <StyledButton />
    </div>
  );
};
export default SignUpPage;
