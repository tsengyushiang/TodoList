import styled, { css } from "styled-components";

export const Tag = styled.div`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: row;

  flex-shrink: 0;
  padding: 3px;
  align-items: center;
`;

export const Text = styled.div`
  margin-right: auto;
  border-radius: 10px;
  background-color: antiquewhite;
  padding: 3px;
  margin: 3px;
  border: 1px solid gray;
  text-overflow: ellipsis;
  overflow: hidden;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `};
`;

export const InputColor = styled.input.attrs({
  type: "color",
})`
  margin-right: auto;
  -webkit-appearance: none;
  border: none;
  width: 20%;

  &:-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &:-webkit-color-swatch {
    border: none;
  }
}
`;
