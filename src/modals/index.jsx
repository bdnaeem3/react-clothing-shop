import SmartSearchModal from "./SmartSearchModal"

import { SMART_SEARCH_MODAL } from "../constants"

const Modal = props => {
    const { name, ...rest } = props

    switch (name) {
        case SMART_SEARCH_MODAL:
            return <SmartSearchModal {...rest} />
        default:
            return null
    }
}

export default Modal
