import { TagContainer } from "./styled";
import TagItem from "../../../TagList/Item";

const Tags = ({ tags }) => {
  return (
    <TagContainer>
      {tags?.map((tag, index) => {
        return <TagItem key={index} {...tag} />;
      })}
    </TagContainer>
  );
};
export default Tags;
