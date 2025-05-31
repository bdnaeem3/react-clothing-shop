import { products } from "../../data"
import { Button, Container } from "../theme"

const ProductDetails = props => {
    const { className = "", ...rest } = props

    return (
        <section id="product-details" className={`my-[50px] ${className}`} {...rest}>
            <Container>
                <div className="flex items-center justify-between">
                    <h3 className="text-[28px] text-[#2b2e32]">
                        White T-Shirt for Girls by InexTenso - 1&amp;2 years
                    </h3>
                    <h4 className="text-[24px]"><strike>930</strike> 770</h4>
                </div>

                <hr className="mt-4 mb-4 border-0 border-t border-t-[rgba(0,0,0,0.1)]" />

                <div className="grid grid-cols-2 gap-[30px]">
                    <div>
                        <div className="bg-white">
                            <img src={products[0].img} alt="" />
                        </div>
                        <div className={`grid grid-cols-5`}>
                            {products.map((item, i) => {
                                return (
                                    <div className={`cursor-pointer ${i == 0 ? 'bg-white' : ''}`}>
                                        <img src={item.img} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="grid grid-cols-5 py-2">
                            <p className="col-span-1">Categories</p>
                            <p className="col-span-4">
                                <a href="#">Jens Pants</a>,
                                <a href="#">Men</a>,
                                <a href="#">Pants</a>
                            </p>
                        </div>
                        <div className="grid grid-cols-5 py-2">
                            <p className="col-span-1">Tags</p>
                            <p className="col-span-4">
                                <a href="#">32" Jeans Pant</a>,
                                <a href="#">34" Jeans Pant</a>,
                                <a href="#">38" Jeans Pant</a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <table className="w-full mb-4 text-[#212529] border border-[#dee2e6] border-collapse">
                            <tbody>
                                <tr>
                                    <td className="font-bold border border-[#dee2e6] p-3 align-top">SKU</td>
                                    <td className="border border-[#dee2e6] p-3 align-top">MJP-007</td>
                                </tr>
                                <tr>
                                    <td className="font-bold border border-[#dee2e6] p-3 align-top">Brand Name</td>
                                    <td className="border border-[#dee2e6] p-3 align-top">Straight Stretch</td>
                                </tr>
                                <tr>
                                    <td className="font-bold border border-[#dee2e6] p-3 align-top">Fabric</td>
                                    <td className="border border-[#dee2e6] p-3 align-top">Denim, Spandex</td>
                                </tr>
                                <tr>
                                    <td className="font-bold border border-[#dee2e6] p-3 align-top">Waist</td>
                                    <td className="border border-[#dee2e6] p-3 align-top">32", 34", 38"</td>
                                </tr>
                                <tr>
                                    <td className="font-bold border border-[#dee2e6] p-3 align-top">Colors</td>
                                    <td className="border border-[#dee2e6] p-3 align-top">Black, Navy</td>
                                </tr>
                                <tr>
                                    <td className="font-bold border border-[#dee2e6] p-3 align-top">Chain/Button</td>
                                    <td className="border border-[#dee2e6] p-3 align-top">Chain</td>
                                </tr>
                                <tr>
                                    <td className="font-bold border border-[#dee2e6] p-3 align-top">Stretch</td>
                                    <td className="border border-[#dee2e6] p-3 align-top">Yes</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex items-center justify-between mb-[20px]">
                            <p>Waist</p>
                            <ul className="flex">
                                <li className="cursor-pointer px-[15px] py-[10px] ml-[20px] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">32</li>
                                <li className="cursor-pointer px-[15px] py-[10px] ml-[20px] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">33</li>
                                <li className="cursor-pointer px-[15px] py-[10px] ml-[20px] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">34</li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-between mb-[20px]">
                            <p>Color</p>
                            <ul className="flex">
                                <li className="cursor-pointer px-[15px] py-[10px] ml-[20px] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">Navy</li>
                                <li className="cursor-pointer px-[15px] py-[10px] ml-[20px] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">White</li>
                                <li className="cursor-pointer px-[15px] py-[10px] ml-[20px] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">Grey</li>
                                <li className="cursor-pointer px-[15px] py-[10px] ml-[20px] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">Green</li>
                            </ul>
                        </div>

                        <hr className="my-[1rem] border-0 border-t border-t-[rgba(0,0,0,0.1)]" />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center h-[30px]">
                                <p className="h-full bg-[#ddd] cursor-pointer w-[30px] flex items-center justify-center text-[24px]">-</p>
                                <input
                                    type="tel"
                                    defaultValue="1"
                                    className="bg-white h-full w-[100px] px-3"
                                    required
                                />
                                <p className="h-full bg-[#ddd] cursor-pointer w-[30px] flex items-center justify-center text-[24px]">+</p>
                            </div>
                            <Button className="!m-0">Add to Cart</Button>
                            <Button className="!flex items-center gap-[6px] !m-0">
                                <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                Favorite
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProductDetails
