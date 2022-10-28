import styled, { css } from "styled-components";

export const Container = styled.div`
  box-shadow: -4px 0 8px #bfbfbf;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 10px;
  max-height: 300px;
  overflow: scroll;
`;

export const Wrapper = styled.div`
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `};
  &:hover {
    box-shadow: -4px 0 8px #bfbfbf;
  }
`;
