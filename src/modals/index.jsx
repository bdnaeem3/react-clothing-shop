import NewAddressModal from "./NewAddressModal"
import SmartSearchModal from "./SmartSearchModal"

import { SMART_SEARCH_MODAL, NEW_ADDRESS_MODAL } from "../constants"

const Modal = props => {
    const { name, ...rest } = props

    switch (name) {
        case SMART_SEARCH_MODAL:
            return <SmartSearchModal {...rest} />
        case NEW_ADDRESS_MODAL:
            return <NewAddressModal {...rest} />
        default:
            return null
    }
}

export default Modal
