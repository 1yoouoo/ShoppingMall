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

const StyledCategory = ({ title, onClickCategory }) => {
  return <StyledSpan onClick={onClickCategory}>{title}</StyledSpan>;
};

export default StyledCategory;
