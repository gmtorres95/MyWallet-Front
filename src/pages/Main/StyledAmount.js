import styled from "styled-components";

export default styled.span`
  color: ${(params) => (params.isGreen ? "#03AC00" : "#c40404")};
`;
