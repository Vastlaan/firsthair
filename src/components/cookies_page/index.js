import Header from "../header";
import Cookies from "./cookies";
import { HEADER_COOKIES } from "../../data/headers";

export default function CookiesComponent() {
    return (
        <>
            <Header
                title={HEADER_COOKIES.title}
                body={HEADER_COOKIES.body}
                url={HEADER_COOKIES.url}
            />
            <Cookies />
        </>
    );
}
