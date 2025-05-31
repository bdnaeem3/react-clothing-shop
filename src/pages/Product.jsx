import RootLayout from "../layouts/RootLayout";

// Sections
import ProductDetails from "../sections/ProductDetails"
import RelatedProducts from "../sections/RelatedProducts";

const ProductPage = () => {
    return (
        <RootLayout>
            <ProductDetails />
            <RelatedProducts />
        </RootLayout>
    )
}

export default ProductPage;