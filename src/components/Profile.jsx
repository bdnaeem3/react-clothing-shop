import UserDetailsCard from "./UserDetailsCard"
import { password_update, personal_info } from "../../data"
import { useDispatch } from "react-redux"
import { showModal } from "../redux/slices/themeSlice"
import { NEW_ADDRESS_MODAL } from "../constants"

const Profile = props => {
    const dispatch = useDispatch()
    const { className = "", ...rest } = props

    const onAddNewAddressHandler = () => {
        dispatch(showModal(NEW_ADDRESS_MODAL))
    }

    return (
        <>
            <UserDetailsCard
                title="Personal Information"
                data={personal_info}
            />

            <UserDetailsCard
                title="Change Password"
                data={password_update}
                className="my-[30px]"
            />

            <h4 className="flex items-center justify-between mb-[20px] text-black align-middle">
                <p className="text-[24px]">Shipping Address</p>
                <button type="button" className="cursor-pointer" onClick={onAddNewAddressHandler}>+ Add Shipping Address</button>
            </h4>

            <div className="grid grid-cols-2 gap-[30px]">
                <div className="col-span-1">
                    <div className="p-[20px] mb-[30px] relative bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)] items-center flex">
                        <button className="absolute right-0 top-0 bg-black text-white text-[0.775rem] px-[15px] py-[2px] rounded-[2px] cursor-pointer">Edit</button>

                        <table>
                            <tbody>
                                <tr>
                                    <td className="py-[5px] pr-[15px]">Name</td>
                                    <td className="py-[5px] pr-[15px]">Home</td>
                                </tr>
                                <tr>
                                    <td className="py-[5px] pr-[15px]">Location</td>
                                    <td className="py-[5px] pr-[15px]">169 Nahar Vila, Kawlar, Airport, Dhaka-1229</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="p-[20px] mb-[30px] relative bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)] items-center flex">
                        <button className="absolute right-0 top-0 bg-black text-white text-[0.775rem] px-[15px] py-[2px] rounded-[2px] cursor-pointer">Edit</button>

                        <table>
                            <tbody>
                                <tr>
                                    <td className="py-[5px] pr-[15px]">Name</td>
                                    <td className="py-[5px] pr-[15px]">Office</td>
                                </tr>
                                <tr>
                                    <td className="py-[5px] pr-[15px]">Location</td>
                                    <td className="py-[5px] pr-[15px]">Gulshan Paladium, Hal Travel Services Ltd, Gulshan-2 Circle, Gulshan-2, Dhaka-1129</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
