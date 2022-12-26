import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledSpan = styled.span`
  margin: 10px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.5s ease;
  text-transform: uppercase;
  &:hover {
    color: red;
  }
`;

const StyledCategory = ({ title }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/shop/${title}`);
    console.log("hi");
  };

  return <StyledSpan onClick={onClick}>{title}</StyledSpan>;
};

export default StyledCategory;
