import styled from 'styled-components';

export default styled.button`
  width: calc(100% - 50px);
  height: 46px;
  border-radius: 5px;
  border: none;
  margin: 6px 25px;
  padding: 0px 16px;
  background-color: #a328d6;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  opacity: ${(props) => (props.isButtonEnabled ? 1 : 0.5)};
`;
