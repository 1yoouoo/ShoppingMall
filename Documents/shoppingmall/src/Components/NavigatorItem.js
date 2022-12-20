const NavigatorItem = ({ title, items }) => {
  return (
    <li className="navigator-item">
      <span className="navigator-item__title">{title}</span>
      <ul className="navigator-item__list">
        {items && // Undefined 방지
          items.map((item) => {
            return (
              <li className="navigator-item__item" key={item}>
                {item}
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default NavigatorItem;
