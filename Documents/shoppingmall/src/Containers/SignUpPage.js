import StyledButton from "../Components/StyledButton";

const SignUpPage = () => {
  return (
    <div className="signup">
      <div className="signup__line"></div>
      <div className="signup__form">
        <table className="signup__form--table">
          {/* 아이디 */}
          <tr>
            <td>아이디</td>
            <td>
              <input></input>
              <span>(영어소문자/숫자, 4~16자)</span>
            </td>
          </tr>
          {/* 비밀번호 */}
          <tr>
            <td>비밀번호</td>
            <td>
              <input></input>
              <span>
                (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
              </span>
            </td>
          </tr>
          {/* 비밀번호 확인 */}
          <tr>
            <td>비밀번호확인</td>
            <td>
              <input></input>
            </td>
          </tr>
          {/* 이름 */}
          <tr>
            <td>이름</td>
            <td>
              <input></input>
            </td>
          </tr>
          {/* 휴대전화 */}
          <tr>
            <td>휴대전화</td>
            <td>
              <select>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="019">019</option>
              </select>
              -
              <input type="text" size="4" />
              -
              <input type="text" size="4" />
              <button>인증번호받기</button>
            </td>
          </tr>
          {/* 이메일 */}
          <tr>
            <td>이메일</td>
            <td>
              <input></input>
              <span></span>
            </td>
          </tr>
        </table>
      </div>
      <div>test</div>
      <StyledButton />
    </div>
  );
};
export default SignUpPage;
