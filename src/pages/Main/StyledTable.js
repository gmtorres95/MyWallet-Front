import styled from 'styled-components';

export default styled.table`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;

  tr {
    margin: 16px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  tbody {
    overflow-y: scroll;
  }

  tbody td:nth-child(2) {
    width: 100%;
    text-align: left;
  }

  tbody td:first-child {
    min-width: 48px;
    color: #c6c6c6;
  }

  tbody::-webkit-scrollbar {
    display: none;
  }

  tfoot {
    font-size: 17px;
  }

  tfoot td:first-child {
    font-weight: 700;
  }
`;
