import NewAddressModal from "./NewAddressModal";
import SmartSearchModal from "./SmartSearchModal";

import { SMART_SEARCH_MODAL, NEW_ADDRESS_MODAL } from "../constants";

const MODAL_COMPONENTS = {
    [SMART_SEARCH_MODAL]: SmartSearchModal,
    [NEW_ADDRESS_MODAL]: NewAddressModal,
};

const Modal = ({ name, ...rest }) => {
    const ModalComponent = MODAL_COMPONENTS[name];
    return ModalComponent ? <ModalComponent {...rest} /> : null;
};

export default Modal;
