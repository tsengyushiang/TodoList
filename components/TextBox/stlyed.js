import styled, { css } from "styled-components";

export const TextBox = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: row;
  border: solid gray 1px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  ${(props) =>
    props.isAlert &&
    css`
      border: solid red 1px;
    `}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 3px;
  border: none;
  padding: 10px;
  ${(props) =>
    props.hasIcon &&
    `
    border-radius: 0px 20px 20px 0px;
    `};
`;
