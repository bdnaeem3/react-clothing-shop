import DefaultContainer from './DefaultContainer'

const Container = props => {
    const { name, ...rest } = props

    switch (name) {
        case 'custom':
        default:
            return <DefaultContainer {...rest} />
    }
}

export default Container