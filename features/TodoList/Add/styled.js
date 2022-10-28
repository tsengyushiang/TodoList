import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: row;
  border-radius: 10px;
  background-color: white;
  flex-shrink: 0;
  padding: 5px;
  margin: 5px;
  align-items: center;
  ${(props) =>
    props.highlight &&
    `
      background-color: yellow;
    `};
`;
