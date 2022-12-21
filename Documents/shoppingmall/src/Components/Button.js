import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  font-size: 10px;
  cursor: pointer;
`;

export default StyledButton;
