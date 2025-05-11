import { useEffect } from "react";
import { useSelector } from "react-redux";

// Sections
import Header from "../sections/Header";
import TopBar from "../sections/TopBar";
import Footer from "../sections/Footer";
import Modal from "../modals";

const RootLayout = props => {
    const { children } = props

    const theme = useSelector(state => state.theme)

    useEffect(() => {
        const className = "overflow-hidden";

        if (theme?.modalName) {
            document.body.classList.add(className);
        } else {
            document.body.classList.remove(className);
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove(className);
        };
    }, [theme?.modalName]);


    return (
        <>
            <TopBar />
            <Header />
            {children}
            <Footer />
            <Modal name={theme?.modalName} />
        </>
    )
}

export default RootLayout;