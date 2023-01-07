import { useNavigate } from "react-router-dom";

const NavigatorItem = ({ title, items, className }) => {
  //hook
  const navigate = useNavigate();
  return (
    <li className={className}>
      <span
        className="navigator-item__title"
        onClick={() => {
          navigate(`/${title.replace(/(\s*)/g, "")}`); // 공백 제거
        }}
      >
        {title}
      </span>
      <ul className="navigator-item__list">
        {items?.map((item) => {
          return (
            <li
              className="navigator-item__item"
              key={Object.keys(item)}
              onClick={() => navigate(`${Object.values(item)}`)}
            >
              {Object.keys(item)}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default NavigatorItem;
