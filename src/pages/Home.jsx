import RootLayout from "../layouts/RootLayout";

// Sections
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Newsletter from "../sections/Newsletter";

const Homepage = () => {
    return (
        <RootLayout>
            <Hero />
            <Products />
            <Newsletter />
        </RootLayout>
    )
}

export default Homepage;