import Navigation from "../components/navigation";

export default function LayoutComponent({ children }) {
    return (
        <>
            <Navigation />
            {children}
            {/* <Footer /> */}
        </>
    );
}
