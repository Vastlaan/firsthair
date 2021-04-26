import styled from "styled-components";
import { fonts, FlexRow, respond } from "../../../styles";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";

export default function ButtonsComponent() {
    return (
        <ButtonsContainer>
            <Link href="https://www.google.com/maps/place/First+Hair/@52.5095632,4.944381,15z/data=!4m5!3m4!1s0x0:0x963c1c3b6fc280b3!8m2!3d52.5095632!4d4.944381">
                <IoLocationOutline />
                <p>Westerstraat 435, 1442 AZ Purmerend</p>
            </Link>
            <Link href="tel:0299450325">
                <IoCallOutline />
                <p>0299 324 325</p>
            </Link>
        </ButtonsContainer>
    );
}

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4.7rem;

    ${() => respond("m", "flex-direction: row;")}
`;

const Link = styled.a`
    text-decoration: none;
    margin: 1.4rem;
    min-width: 37rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.4rem;
    background-color: ${(p) => p.theme.black};
    border: none;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
    transition: all 0.3s;

    &:hover {
        box-shadow: 0 0 1.4rem rgba(0, 0, 0, 0.9);
    }

    p {
        font-size: 1.9rem;
        font-family: ${fonts.heading};
        letter-spacing: 0.15rem;
        font-weight: 300;
        color: ${(p) => p.theme.grey_1};
    }

    svg {
        color: ${(p) => p.theme.primary};
        font-size: 2.7rem;
        margin-right: 1.4rem;
    }
`;
