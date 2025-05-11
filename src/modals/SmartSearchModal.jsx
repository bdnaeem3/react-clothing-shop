import { useDispatch } from "react-redux"
import { hideModal } from "../redux/slices/themeSlice"

const SmartSearchModal = props => {
    const { className = {}, ...rest } = props

    const dispatch = useDispatch()

    const hideModalHandler = () => {
        dispatch(hideModal())
    }

    return (
        <>
            <div
                className="fixed top-0 left-0 z-[1040] w-[100vw] h-[100vh] bg-black opacity-50 cursor-pointer"
                onClick={hideModalHandler}
            >

            </div>
            <div className={`transition-transform duration-[300ms] ease-out max-w-[800px] min-h-[calc(100%-3.5rem)] my-[1.75rem] mx-auto flex items-center relative w-auto ${className}`} {...rest}>
                Smart Search Modal
            </div>
        </>
    )
}

export default SmartSearchModal