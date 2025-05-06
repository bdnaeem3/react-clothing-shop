// Sections
import Header from "../sections/Header";
import TopBar from "../sections/TopBar";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Newsletter from "../sections/Newsletter";

const Homepage = props => {
    return (
        <>
            <TopBar />
            <Header />
            <Hero />
            <Products />
            <Newsletter />
        </>
    )
}

export default Homepage;