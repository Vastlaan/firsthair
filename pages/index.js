import Layout from "../src/layout";
import Head from "../src/components/seo";
import Landing from "../src/components/landing_page/";

export default function LandingPage() {
    return (
        <Layout>
            <Head
                title="Imperum Kapsalon Purmerend"
                description={`Imperum is de ambachtelijke kapper waar met zorg geselecteerde producten en materialen wordt gewerkt. 
                We kijken niet naar de tijd, maar hebben alleen maar oog voor het haar. Alle aandacht gaat naar jou.`}
            />
            <Landing />
        </Layout>
    );
}
