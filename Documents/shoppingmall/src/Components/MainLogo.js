import { useNavigate } from "react-router-dom";

const MainLogo = ({ right }) => {
  //state
  const navigate = useNavigate();
  return (
    <div
      className="header-form__logo"
      style={{ right: right }}
      onClick={() => {
        navigate("/homepage");
      }}
    >
      <b>ZOMBO</b>
    </div>
  );
};
export default MainLogo;
