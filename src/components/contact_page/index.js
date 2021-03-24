import Header from "../header";
import Details from "./details";
import Openinghours from "../opening_hours";
import Map from "./map";
import { HEADER_CONTACT } from "../../data/headers";

export default function ContactComponent() {
    return (
        <>
            <Header
                title={HEADER_CONTACT.title}
                body={HEADER_CONTACT.body}
                url={HEADER_CONTACT.url}
            />
            <Details />
            <Map />
            <Openinghours />
        </>
    );
}
