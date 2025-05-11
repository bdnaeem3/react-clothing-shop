// Sections
import TopBar from "../sections/TopBar";
import Header from "../sections/Header";
import SmartFilter from "../sections/SmartFilter";
import Products from "../sections/Products";
import Footer from "../sections/Footer";

const Homepage = props => {
    return (
        <>
            <TopBar />
            <Header />
            <SmartFilter />
            <Products />
            <Footer />
        </>
    )
}

export default Homepage;