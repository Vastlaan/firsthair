import Layout from "../src/layout";
import Head from "../src/components/seo";
import Maatregelen from "../src/components/maatregelen_page";

export default function MaatregelenPage() {
    return (
        <Layout>
            <Head
                title="Coronamaatregelen"
                description="Veiligheid is erg belangrijk in onze salons. Daarom nemen wij ook de nodige maatregelen om verspreiding van Covid 19 te voorkomen."
                robots="noindex, nofollow"
            />
            <Maatregelen />
        </Layout>
    );
}
