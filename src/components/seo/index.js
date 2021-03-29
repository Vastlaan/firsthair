import Head from "next/head";

export default function SeoComponent({
    host,
    title,
    description,
    robots,
    logo,
    image,
}) {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>{title || "First Hair Kapsalon Purmerend"}</title>
            <meta
                name="description"
                content={
                    description ||
                    `First Hair is de ambachtelijke kapper waar met zorg geselecteerde producten en materialen wordt gewerkt. 
                We kijken niet naar de tijd, maar hebben alleen maar oog voor het haar. Alle aandacht gaat naar jou.`
                }
                data-react-helmet="true"
            />
            <link rel="apple-touch-icon" href={logo || "/logo192.png"} />

            <link rel="cannonical" href={host || "https://first-hair.nl/"} />

            <meta name="robots" content={robots || "noindex, nofollow"} />

            <meta property="og:type" content="article" />

            <meta
                property="og:title"
                content={title || "First Hair Kapsalon Purmerend"}
            />

            <meta
                property="og:description"
                content={
                    description ||
                    `First Hair is de ambachtelijke kapper waar met zorg geselecteerde producten en materialen wordt gewerkt. 
                We kijken niet naar de tijd, maar hebben alleen maar oog voor het haar. Alle aandacht gaat naar jou.`
                }
            />

            <meta
                property="og:image"
                content={image || "/OGImageHomepage.png"}
            />

            <meta
                property="og:url"
                content={host || "https://first-hair.nl/"}
            />

            <meta
                property="og:site_name"
                content={title || "First Hair Kapsalon Purmerend"}
            />
        </Head>
    );
}
