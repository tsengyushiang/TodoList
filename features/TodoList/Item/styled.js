import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  flex-shrink: 0;
  padding: 5px;
  margin: 5px;
  ${(props) =>
    props.highlight &&
    `
      background-color: aliceblue;
    `};
`;

export const TagsWrapper = styled.div`
  flex-wrap: wrap;
`;
