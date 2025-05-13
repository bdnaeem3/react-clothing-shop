const SmartSearch = props => {
    const { className = "", ...rest } = props

    return (
        <button className={`sticky top-[20px] left-0 z-[9] px-[25px] py-[7px] bg-[#d73977] text-white rounded-[4px] rounded-tl-none rounded-bl-none w-[100px] cursor-pointer ${className}`} {...rest}>
            Smart Filter
        </button>
    )
}

export default SmartSearch
