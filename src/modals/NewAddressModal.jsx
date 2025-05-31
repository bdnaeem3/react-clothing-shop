// constants
import { addNewAddressFormValues } from "../constants"

// packages
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

// redux
import { hideModal } from "../redux/slices/themeSlice"

// theme
import Button from "../theme/buttons"

const NewAddressModal = props => {
    const { className = "", ...rest } = props

    const dispatch = useDispatch()
    const [activeButton, setActiveButton] = useState(false)
    const [formValues, setFormValues] = useState(addNewAddressFormValues)

    const hideModalHandler = () => {
        dispatch(hideModal())
    }

    const formChangeHandler = e => {
        const { name, value } = e.target;

        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    const onSubmitHandler = e => {
        e.preventDefault()
    }

    const resetHandler = () => {
        setFormValues(addNewAddressFormValues)
    }

    useEffect(() => {
        setActiveButton(Object.values(formValues).some(value => value.trim() === ''))
    }, [formValues])

    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center transition-transform duration-[300ms] ease-out">
            <div
                className="absolute top-0 left-0 z-[1040] w-full h-full bg-black opacity-50 cursor-pointer"
                onClick={hideModalHandler}
            >

            </div>
            <div className={`w-[900px] max-h-[calc(100%-3.5rem)] my-[1.75rem] mx-auto bg-white z-[9999] rounded-md overflow-y-auto ${className}`} {...rest}>
                <div className="flex items-center justify-between px-4 py-4 border-b border-[#dee2e6] rounded-t-[0.3rem]">
                    <p className="text-[24px]">Add New Address</p>

                    <Button onClick={resetHandler} className="!mx-0">Reset</Button>
                </div>

                <form action="#" className="w-[70%] my-[30px] mx-auto" onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="p-[10px_15px] leading-[1.857] text-sm border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                        onChange={formChangeHandler}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-[10px_15px] leading-[1.857] text-sm border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                        onChange={formChangeHandler}
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        className="p-[10px_15px] leading-[1.857] text-sm border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                        onChange={formChangeHandler}
                        required
                    />
                    <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        className="p-[10px_15px] leading-[1.857] text-sm border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                        onChange={formChangeHandler}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="p-[10px_15px] leading-[1.857] text-sm border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                        onChange={formChangeHandler}
                        required
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="p-[10px_15px] leading-[1.857] text-sm border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                        onChange={formChangeHandler}
                        required
                    />
                    <input
                        type="tel"
                        name="zip"
                        placeholder="Zip Code"
                        className="p-[10px_15px] leading-[1.857] text-sm border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                        onChange={formChangeHandler}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address Name"
                        className="p-[10px_15px] leading-[1.857] text-sm border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                        onChange={formChangeHandler}
                        required
                    />
                    <Button
                        type="submit"
                        className={activeButton ? 'pointer-events-none bg-gray-400' : ''}
                        disabled={activeButton}
                    >
                        Add Address
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default NewAddressModal
