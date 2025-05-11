import { useDispatch } from "react-redux"

import { showModal } from "../redux/slices/themeSlice"

import { Container } from "../theme"
import { ProductCard, SmartSearch } from "../components"

import { products } from "../../data"

const Products = props => {
    const { className = {}, ...rest } = props

    const dispatch = useDispatch()

    const smartSearchClickHandler = () => {
        dispatch(showModal('SmartSearchModal'))
    }

    return (
        <section id="products" className={`pb-[30px] ${className}`} {...rest}>
            <SmartSearch onClick={smartSearchClickHandler} />

            <Container>
                <div className="flex flex-wrap justify-center pb-[70px]">
                    {
                        products.map(item => {
                            return (
                                <ProductCard key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default Products