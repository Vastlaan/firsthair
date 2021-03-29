import Layout from "../src/layout";
import Head from "../src/components/seo";
import Cookies from "../src/components/cookies_page";

export default function CookiesPage() {
    return (
        <Layout>
            <Head
                title="Cookies en privacybeleid"
                description="Wij streven ernaar de privacy van onze gebruikers en klanten te beschermen."
                robots="noindex, nofollow"
            />
            <Cookies />
        </Layout>
    );
}
