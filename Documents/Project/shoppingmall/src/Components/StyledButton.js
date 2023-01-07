import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  width: 200px;
  height: 30px;
  margin-top: 10px;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    filter: invert(100%);
  }
`;

export default StyledButton;
