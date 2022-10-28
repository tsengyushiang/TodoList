import styled from "styled-components";
import {
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MIDDLE,
} from "../../../constants/styles";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gainsboro;
  margin: 5px;
  max-width: 30%;
  min-width: 30%;
  border-radius: 5px;
  padding: 0px 0px 5px 0px;
  flex-shrink: 0;

  ${MEDIA_QUERY_MIDDLE} {
    max-width: 40%;
    min-width: 40%;
  }

  ${MEDIA_QUERY_SMALL} {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  flex-direction: row;
  height: 95%;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}
`;
