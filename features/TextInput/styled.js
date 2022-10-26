import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  overflow: scroll;
  flex-direction: row;
`;

export const AlterModalBox = styled.div`
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  color: Red;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const AlterText = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: medium;
  color: white;
  text-align: center;
`;
