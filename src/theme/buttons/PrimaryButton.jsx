const PrimaryButton = props => {
    const { children, type = "button", className = "", ...rest } = props

    return (
        <button type={type} className={`table px-[15px] py-[10px] text-white my-[10px] mx-auto bg-[#d73977] rounded-[4px] cursor-pointer ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default PrimaryButton;