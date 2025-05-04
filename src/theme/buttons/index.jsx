import PrimaryButton from "./PrimaryButton"

const Button = props => {
    const { name, ...rest } = props

    switch (name) {
        case 'primary':
        default:
            return <PrimaryButton {...rest} />
    }
}

export default Button