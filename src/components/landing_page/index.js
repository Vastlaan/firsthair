import Header from "./header";
import Intersection from "../intersection";

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
        </>
    );
}
