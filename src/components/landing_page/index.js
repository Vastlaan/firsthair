import Header from "./header";
import Intersection from "../intersection";
import Parallax from "../parallax";
import SmallGallery from "./small_gallery";
import Prices from "../prices";

export default function LandingComponent() {
    return (
        <>
            <Header />

            <Intersection
                category={`haartrends`}
                title={`De Ultieme Inspiratie voor Kapsels`}
                body={`
                    Welke kapseltrends, haartrends en haarstijlen zullen er populair worden voor dames en heren in 2021?
                    Zoals altijd, lopen enkele kapseltrends over van eind vorig jaar en zien we die kapsels meer en meer opkomen.
                `}
            />

            <SmallGallery />

            <Intersection
                category={`corona maatregelen`}
                title={`Extra Aandacht voor Goede Hygiëne`}
                body={`
                    Wij houden zich aan alle coronamaatregelen en werken volgens de adviezen van RIVM.
                    Alleen wanneer iedereen zich aan de maatregelen houdt, zetten we samen een stap vooruit.
                `}
                link="/veiligheid"
            />

            <Parallax
                title={`Weer trots zijn op jouw haar`}
                body={`Een ruimte waarin je jezelf kunt zijn en comfortabel voelt.
                Een salon waar jij de behandeling krijgt die aansluit op je persoonlijke wensen en de expertise van onze topkappers`}
            />

            <Prices />
        </>
    );
}
