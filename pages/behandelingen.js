import Layout from "../src/layout";
import Head from "../src/components/seo";
import Behandelingen from "../src/components/behandelingen_page";

export default function BehandelingenPage() {
    return (
        <Layout>
            <Head
                title="Overzicht van de behandelingen met een prijzen"
                description="Wij knippen, kleuren en stylen je haar met deskundigheid. Wil je extensies laten zetten? Ook dan ben je bij ons aan het juiste adres. Wij kunnen zowel onze als je eigen extensions inzetten."
            />
            <Behandelingen />
        </Layout>
    );
}
