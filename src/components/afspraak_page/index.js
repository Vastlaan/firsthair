import Header from "../header";
import Heading from "./heading";
import Form from "./form";
import { HEADER_AFSPRAAK } from "../../data/headers";

export default function AfspraakComponent() {
    return (
        <>
            <Header
                title={HEADER_AFSPRAAK.title}
                body={HEADER_AFSPRAAK.body}
                url={HEADER_AFSPRAAK.url}
            />
            <Heading />
            <Form />
        </>
    );
}
