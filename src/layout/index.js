import Navigation from "../components/navigation";
import Footer from "../components/footer";
import CookiesStatement from "../components/modals/cookie_statement";

export default function LayoutComponent({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
            <CookiesStatement />
        </>
    );
}
