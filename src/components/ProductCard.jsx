const ProductCard = props => {
    const { item, className = {}, cartHandler = () => { }, buyHandler = () => { }, ...rest } = props

    const onCartHandler = () => {
        console.log('clicked on cart');
        cartHandler()
    }

    const onBuyNowHandler = () => {
        console.log('clicked on Buy Now');
        buyHandler()
    }

    return (
        <div className={`group w-[300px] relative border-2 border-transparent p-[10px] rounded-[7px] transition-all duration-[150ms] ease-linear hover:border-[#d73977] ${className}`} {...rest}>
            <a href="#" className="flex items-center justify-center w-full h-[400px]">
                <img src={item?.img} alt="" />
            </a>

            <a href="#" className="text-[#2b2e32] group-hover:text-[#d73977]">
                {item?.title}
            </a>

            <h3 className="text-[1.3rem] font-bold text-right">
                <strike className="text-[1.1rem] mr-[10px]">
                    {item.regularPrice}
                    <span>৳</span>
                </strike>
                {item.regularPrice}
                <span className="ml-[3px]">৳</span>
            </h3>

            <div className="product-tags-icon group-hover:flex absolute top-[20px] right-[20px] hidden cursor-pointer">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tags" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" width={20} height={16}><path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path></svg>

                <div className="product-tags relative hidden">
                    <ul className="absolute top-full left-1/2 bg-white rounded-[3px] transform -translate-x-1/2 shadow-[0_0_3px_#eaeaea] px-0 py-[5px] z-[9]">
                        {
                            item.tags.length > 0 &&
                            item.tags.map((tag, i) => (
                                <li key={i}>
                                    <a href="#" className="whitespace-nowrap px-[15px] py-[5px] block text-[0.875rem] text-[#2b2e32]">{tag}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="group-hover:flex hidden absolute top-[20px] left-[20px] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 552 552" width="16" height="16">
                    <path
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                        // stroke={item.wishlist ? '' : "currentColor"}
                        strokeWidth="50"
                        className={`${item.wishlist ? 'fill-[#d73977] stroke-[#d73977]' : 'fill-transparent hover:fill-[currentColor] stroke-[currentColor]'}`}
                    />
                </svg>
            </div>

            <div className="group-hover:flex justify-around absolute bottom-[-25px] left-0 w-full z-[9] mt-[20px] hidden">
                <button className="w-[120px] bg-[#d73977] border-[1px] border-[#d73977] inline-block font-normal text-center align-middle select-none border border-transparent py-1 px-3 text-base leading-6 rounded-md transition-colors duration-150 ease-in-out hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:bg-[#0069d9] hover:border-[#0062cc] text-white cursor-pointer" onClick={onCartHandler}>
                    Add to Cart
                </button>
                <button className="w-[120px] bg-[#d73977] border-[1px] border-[#d73977] inline-block font-normal text-center align-middle select-none border border-transparent py-1 px-3 text-base leading-6 rounded-md transition-colors duration-150 ease-in-out hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:bg-[#0069d9] hover:border-[#0062cc] text-white cursor-pointer" onClick={onBuyNowHandler}>
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default ProductCard