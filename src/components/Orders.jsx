import { products } from "../../data"

const Orders = props => {
    const { className = "", ...rest } = props

    return (
        <div className={`rounded overflow-hidden ${className}`} {...rest}>
            <div className="block w-full overflow-x-auto">
                <table className="border-l border-r border-[#c8cbcf] w-full mb-4 text-[#212529] border-collapse">
                    <thead>
                        <tr className="table-secondary">
                            <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3 bg-[#d6d8db]">Order No</td>
                            <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3 bg-[#d6d8db]">Product</td>
                            <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3 bg-[#d6d8db]">Quantity</td>
                            <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3 bg-[#d6d8db]">Price</td>
                            <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3 bg-[#d6d8db]">Status</td>
                            <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3 bg-[#d6d8db]">Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3">#23434</td>
                                        <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3">
                                            <p className="flex items-center">
                                                <img src={item.img} alt="" className="max-h-[100px]" />
                                                White T-Shirt for Girls by InexTenso
                                            </p>
                                        </td>
                                        <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3">3</td>
                                        <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3">1800</td>
                                        <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3">
                                            <span className="text-[#ffa500]">Processing</span>
                                            <span className="text-[#008000]">Confirm</span>
                                            <span className="text-[#ffa500]">Sent for Delivery</span>
                                            <span className="text-[#008000]">Delivered</span>
                                            <span className="text-[#f00]">Not Delivered</span>
                                            <span className="text-[#f00]">Returned</span>
                                            <span className="text-[#008000]">Completed</span>
                                        </td>
                                        <td className="align-middle text-center border-t-0 border-b border-[#c8cbcf] whitespace-nowrap border-[#b3b7bb] p-3"><svg width={18} height={16} data-toggle="modal" data-target="#purchased-product" aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders
