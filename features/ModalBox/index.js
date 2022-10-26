import { createPortal } from "react-dom";

const ModalBox = ({ children }) => {
  return createPortal(children, document.body);
};

export default ModalBox;
