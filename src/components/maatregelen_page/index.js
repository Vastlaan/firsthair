import Header from "../header";
import Rules from "./rules";
import { HEADER_MAATREGELEN } from "../../data/headers";

export default function MaatregelenComponent() {
    return (
        <>
            <Header
                title={HEADER_MAATREGELEN.title}
                body={HEADER_MAATREGELEN.body}
                url={HEADER_MAATREGELEN.url}
            />
            <Rules />
        </>
    );
}
