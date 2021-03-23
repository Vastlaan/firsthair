import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function LayoutComponent({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}
