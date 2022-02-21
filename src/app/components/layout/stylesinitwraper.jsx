import styled from "styled-components";

export const DivInitWraperContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    "left nav"
    "left .";
    
`;
