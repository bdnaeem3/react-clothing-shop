import Facebook from "./Facebook"
import Instagram from "./Instagram"
import Phone from "./Phone"

const Icon = props => {
    const { name, ...rest } = props

    switch (name) {
        case 'facebook':
            return <Facebook {...rest} />
        case 'instagram':
            return <Instagram {...rest} />
        case 'phone':
            return <Phone {...rest} />
        default:
            return
    }
}

export default Icon