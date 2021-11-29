import styled from 'styled-components';

export default styled.div`
  header {
    width: 100%;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
  }

  nav {
    margin: 14px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div {
    width: calc(100vw - 48px);
    height: calc(100vh - 221px);
    border-radius: 5px;
    margin: 0px 24px;
    padding: 0px 12px;
    background-color: #fff;
  }

  span {
    width: 0px;
  }

  p {
    height: 100%;
    padding: 40px;
    color: #868686;
    font-size: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
  }

  button {
    width: calc((100% - 16px) / 2);
    height: 114px;
    border-radius: 5px;
    background-color: #a328d6;
  }
`;
