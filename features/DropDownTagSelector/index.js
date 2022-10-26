import ToggleList from "../ToggleList";
import DropDownContainer from "../DropDownContainer";
import useValidTagsFilter from "../../hooks/useValidTagsFilter";
import { useState } from "react";

const DropDownTagSelector = ({ onSelect, defaultTags = [], onHover }) => {
  const { getValidTagsId, validTags } = useValidTagsFilter();
  const [checkedIds, setcheckedIds] = useState(defaultTags);

  const onChange = (selectedIds) => {
    setcheckedIds(selectedIds);
    onSelect(selectedIds);
  };

  const validIds = getValidTagsId(checkedIds);

  return (
    <DropDownContainer onHover={onHover}>
      <ToggleList
        selections={validTags}
        selectedItems={validIds}
        onToggle={onChange}
      />
    </DropDownContainer>
  );
};

export default DropDownTagSelector;
