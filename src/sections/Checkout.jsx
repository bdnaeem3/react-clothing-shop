import { useDispatch } from "react-redux"
import { NEW_ADDRESS_MODAL } from "../constants"

import { showModal } from "../redux/slices/themeSlice"

import { Button, Container } from "../theme"


const Checkout = props => {
    const dispatch = useDispatch()
    const { className = "", ...rest } = props

    const addNewAddressHandler = () => {
        dispatch(showModal(NEW_ADDRESS_MODAL))
    }

    return (
        <section id="checkout" className={`my-[50px] ${className}`} {...rest}>
            <Container>
                <div className="grid grid-cols-3 gap-[30px]">
                    <div>
                        <h4 className="mb-[20px] text-[1.5rem]">Billing Details</h4>

                        <div className="grid grid-cols-3 gap-[20px] p-5 bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">
                            <div className="w-full h-[150px] p-5 text-center cursor-pointer flex items-center justify-center bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">
                                Same as this account
                            </div>

                            <div className="w-full h-[150px] p-5 text-center cursor-pointer flex items-center justify-center bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">
                                Same as this account
                            </div>

                            <div className="w-full h-[150px] p-5 text-center cursor-pointer flex items-center justify-center bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]" onClick={addNewAddressHandler}>
                                Different account
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-[20px] text-[1.5rem]">Shipping Address</h4>

                        <div className="grid grid-cols-3 gap-[20px] p-5 bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">
                            <div className="w-full h-[150px] p-5 text-center cursor-pointer flex items-center justify-center bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">
                                Same as this account
                            </div>

                            <div className="w-full h-[150px] p-5 text-center cursor-pointer flex items-center justify-center bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">
                                Same as this account
                            </div>

                            <div className="w-full h-[150px] p-5 text-center cursor-pointer flex items-center justify-center bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]" onClick={addNewAddressHandler}>
                                Different account
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-[20px] text-[1.5rem]">Total Amount</h4>

                        <div className="p-5 bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">
                            <ul>
                                <li className="flex justify-between items-center">
                                    <p className="mb-[10px]">Products Amount</p>
                                    <strong>1200</strong>
                                </li>
                                <li className="flex justify-between items-center">
                                    <p className="mb-[10px]">Shipping Cost</p>
                                    <strong>1200</strong>
                                </li>
                                <li className="flex justify-between items-center">
                                    <p className="mb-[10px]">Coupon</p>
                                    <strong>
                                        <input type="text" placeholder="Do you have any coupon?" className="p-2.5 leading-[1.857] text-[0.875rem] border border-[rgba(181,181,181,0.5)] rounded w-full" />
                                    </strong>
                                </li>
                                <li className="flex justify-between items-center">
                                    <p className="mb-[10px]">Net Total</p>
                                    <strong>1240</strong>
                                </li>
                                <Button className="w-full mb-0">Pay Now</Button>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Checkout