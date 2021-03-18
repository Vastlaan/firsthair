import GlobalStyles from "../src/globals/globalStyles";
import ThemeProvider from "../src/globals/themeProvider";

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
