import styled from "styled-components";
import {
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MIDDLE,
} from "../../../constants/styles";

export const FloatRightBox = styled.div`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  flex-direction: column;
  box-shadow: -4px 0 8px #bfbfbf;
  position: fixed;
  right: 0;
  height: 100vh;
  background-color: #f5f5f5;
  width: 20vw;
  margin: 5px;
  border-radius: 10px;

  ${MEDIA_QUERY_MIDDLE} {
    width: 30vw;
  }
  ${MEDIA_QUERY_SMALL} {
    width: 50vw;
  }
`;

export const Title = styled.div`
  padding: 10px;
`;

export const Edit = styled.div`
  padding: 10px 5px 10px 5px;
  border-bottom-style: solid;
  border-bottom-color: #dbdbdb;
  border-bottom-width: 1px;
`;
