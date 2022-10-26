import { DropDownWrapper, DropDownItem, Trigger } from "./styled";
import PropTypes from "prop-types";

const DropDownContainer = ({ children, onHover }) => {
  return (
    <DropDownWrapper>
      <Trigger>{onHover}</Trigger>
      <DropDownItem>{children}</DropDownItem>
    </DropDownWrapper>
  );
};

DropDownContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default DropDownContainer;
