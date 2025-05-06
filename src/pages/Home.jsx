// Sections
import Header from "../sections/Header";
import TopBar from "../sections/TopBar";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";

const Homepage = props => {
    return (
        <>
            <TopBar />
            <Header />
            <Hero />
            <Products />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Homepage;