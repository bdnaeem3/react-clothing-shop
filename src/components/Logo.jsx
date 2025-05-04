const Logo = props => {
    const { className = {}, ...rest } = props

    return (
        <button type="button" className={`max-w-[200px] block cursor-pointer`} {...rest}>
            <img src="/public/logo.png" alt="" />
        </button>
    )
}

export default Logo