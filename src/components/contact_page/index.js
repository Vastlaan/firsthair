import styled from "styled-components";
import Header from "../header";
import Openinghours from "../opening_hours";

export default function ContactComponent() {
    return (
        <>
            <Header
                title="Wij zijn je graag van dienst"
                body="Heb je een vraag voor ons? Neem gerust contact met een van onze medewerkers op via de onderstaande contactgegevens."
                url=""
            />
            <Openinghours />
        </>
    );
}
