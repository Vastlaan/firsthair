import Header from "../header";
import Prices from "../prices";
import { HEADER_BEHANDELINGEN } from "../../data/headers";

export default function BehandelingenComponent() {
    return (
        <>
            <Header
                title={HEADER_BEHANDELINGEN.title}
                body={HEADER_BEHANDELINGEN.body}
                url={HEADER_BEHANDELINGEN.url}
            />
            <Prices />
        </>
    );
}
