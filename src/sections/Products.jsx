import { Container } from "../theme"
import { ProductCard } from "../components"

import { products } from "../../data"

const Products = props => {
    const {className={}, ...rest} = props

    return (
        <section id="products" className={`pb-[30px] ${className}`} {...rest}>
            <Container>
                <div className="flex flex-wrap justify-center pb-[70px]">
                    {
                        products.map(item=>{
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