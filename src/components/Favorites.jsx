import { products } from "../../data"
import ProductCard from "./ProductCard"

const Favorites = props => {
    const { className = "", ...rest } = props

    return (
        <div className={`flex flex-wrap justify-center pb-[70px] ${className}`} {...rest}>
            {
                products.map(item => {
                    return (
                        <ProductCard key={item.id} item={item} />
                    )
                })
            }
        </div>
    )
}

export default Favorites
