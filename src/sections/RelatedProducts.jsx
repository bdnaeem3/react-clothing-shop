import { products } from "../../data"
import { ProductCard } from "../components"
import { Container } from "../theme"

const RelatedProducts = props => {
    const { className = "", ...rest } = props

    return (
        <section id="related-products" className="" {...rest}>
            <Container>
                <h2 className="text-[28px]">Related Products</h2>
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

export default RelatedProducts