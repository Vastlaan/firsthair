import Layout from "../src/layout";
import Afspraak from "../src/components/afspraak_page";
import Head from "../src/components/seo";

export default function AfspraakPage() {
    return (
        <Layout>
            <Head
                title="Maak een afspraak"
                description="Online afspraak maken in 3 makkelijke stappen. Eenvoudig en digitaal jouw volgende bezoek plannen!"
            />
            <Afspraak />
        </Layout>
    );
}
