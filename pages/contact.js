import Layout from "../src/layout";
import Head from "../src/components/seo";
import Contact from "../src/components/contact_page";

export default function ContactPage() {
    return (
        <Layout>
            <Head
                title="Contact Ons - First Hair Kapsalon"
                description="Heb je een vraag voor ons? Neem gerust contact met een van onze medewerkers op via de onderstaande contactgegevens"
            />
            <Contact />
        </Layout>
    );
}
