import { useEffect } from "react";
import API from "../API/Api";

const MyPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    API.getuser(token).then((data) => {
      console.log(data);
    });
  });
  return (
    <div>
      <form>
        <span>
          <label>이름</label>
        </span>
        <span>
          <label>아이디</label>
        </span>
        <span>
          <label>비밀번호</label>
        </span>
        <span>
          <label>이메일</label>
        </span>
        <span>
          <label>휴대폰</label>
        </span>
      </form>
    </div>
  );
};

export default MyPage;
