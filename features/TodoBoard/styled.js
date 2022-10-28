import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  position: fixed;
`;
