import styled from "styled-components";

export const AddButton = styled.div`
  color: gray;
  text-align: center;
  margin: 0px 6px 0px 2px;
  border: solid gray 1px;
  width: 10%;
  height: auto;

  &:hover {
    background-color: green;
    color: white;
  }

  &:before {
    content: "+";
  }
`;

export const DeleteButton = styled.div`
  color: gray;
  text-align: center;
  margin-left: auto;
  padding: 2px;

  &:hover {
    background-color: red;
    color: white;
  }

  &::before {
    content: "X";
  }
`;
