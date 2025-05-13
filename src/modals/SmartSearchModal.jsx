// packages
import { useState } from "react"
import { useDispatch } from "react-redux"

// redux
import { hideModal } from "../redux/slices/themeSlice"

// theme
import Button from "../theme/buttons"

// data
import categories from "../../data/categories"

const SmartSearchModal = props => {
    const { className = "", ...rest } = props

    const dispatch = useDispatch()
    const [activeFitler, setActiveFilter] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [filteredCategories, setFilteredCategories] = useState(categories.filter(item => !item.parentId))

    const hideModalHandler = () => {
        dispatch(hideModal())
    }

    const checkFilterButton = (length) => {
        setActiveFilter(length > 0)
    }

    const selectCategoryHandler = item => {
        setSelectedCategories([...selectedCategories, item])

        const newCategories = categories.filter(thisItem => item.id == thisItem.parentId)
        setFilteredCategories(newCategories)

        checkFilterButton(newCategories.length)
    }

    const selectedCategoryHandler = item => {
        const newSelectedCategories = selectedCategories.filter(i => i.id !== item.id)
        setSelectedCategories(newSelectedCategories)

        const newCategories = categories.filter(thisItem => thisItem.parentId == item.parentId)
        setFilteredCategories(newCategories)

        checkFilterButton(newCategories.length)
    }

    const resetHandler = () => {
        setSelectedCategories([])
        setFilteredCategories(categories.filter(item => !item.parentId))
    }

    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center transition-transform duration-[300ms] ease-out">
            <div
                className="absolute top-0 left-0 z-[1040] w-full h-full bg-black opacity-50 cursor-pointer"
                onClick={hideModalHandler}
            >

            </div>
            <div className={`max-w-[900px] max-h-[calc(100%-3.5rem)] my-[1.75rem] mx-auto w-auto bg-white z-[9999] rounded-md overflow-y-auto ${className}`} {...rest}>
                <div className="flex justify-between px-4 py-4 border-b border-[#dee2e6] rounded-t-[0.3rem]">
                    Smart Search

                    <Button onClick={resetHandler} className="!mx-0">Reset</Button>
                </div>

                {
                    selectedCategories.length > 0 &&

                    <div className="relative grid grid-cols-4 gap-[20px] p-4 mb-[-10px]">
                        {
                            selectedCategories.map((item, i) => {
                                return (
                                    <div className={`w-[150px] h-[150px] text-center p-5 whitespace-normal cursor-pointer inline-flex items-center justify-center bg-[#d73977] rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)] text-white hover:shadow-[0_1px_14px_0_rgba(0,0,0,0.17)] capitalize ${selectedCategories.length == i + 1 ? '' : 'pointer-events-none'}`} onClick={() => selectedCategoryHandler(item)} key={item.id}>
                                        {item.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                }

                <div className="relative grid grid-cols-4 gap-[20px] p-4">
                    {
                        filteredCategories.map(item => {
                            return (
                                <div className="w-[150px] h-[150px] text-center p-5 whitespace-normal cursor-pointer inline-flex items-center justify-center bg-white rounded shadow-[0_1px_4px_0_rgba(0,0,0,0.17)] hover:shadow-[0_1px_14px_0_rgba(0,0,0,0.17)] capitalize" onClick={() => selectCategoryHandler(item)} key={item.id}>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex items-center justify-center p-4 border-t border-t-[#dee2e6]">
                    <Button className={activeFitler ? 'pointer-events-none bg-gray-400' : ''} disabled={activeFitler}>Show Products</Button>
                </div>
            </div>
        </div>
    )
}

export default SmartSearchModal
