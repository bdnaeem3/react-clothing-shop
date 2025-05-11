import SmartSearchModal from "./SmartSearchModal"

const Modal = props => {
    const { name, ...rest } = props

    switch (name) {
        case 'SmartSearchModal':
            return <SmartSearchModal {...rest} />
        default:
            return null
    }
}

export default Modal
