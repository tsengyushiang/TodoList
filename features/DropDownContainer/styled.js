import styled from "styled-components";

export const DropDownWrapper = styled.div`
  margin: 3px;
  position: relative;
`;

export const DropDownItem = styled.div`
  display: none;
  position: absolute;
  &:hover {
    display: block;
  }
  width: 100%;
`;

export const Trigger = styled.div`
  background-color: white;
  padding: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
  &:hover ~ ${DropDownItem} {
    display: block;
  }
`;
