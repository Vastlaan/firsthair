import Link from "next/link";
import styled from "styled-components";
import { fonts } from "../../styles";

export default function LinksComponent() {
    return (
        <Links>
            <Link href="afspraak">
                <ListLink margin="1.4rem">Afspraak</ListLink>
            </Link>
            <Link href="behandelingen">
                <ListLink margin="1.4rem">Behandelingen</ListLink>
            </Link>
            <Link href="contact">
                <ListLink margin="1.4rem">Contact</ListLink>
            </Link>
            <Link href="cookies">
                <ListLink margin="1.4rem">Cookies</ListLink>
            </Link>
        </Links>
    );
}

const Links = styled.ul`
    list-style: none;
    margin: 2.7rem auto;
    display: flex;
    justify-content: center;
    aling-itmes: center;
`;
const ListLink = styled.li`
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    letter-spacing: 0.15rem;
    color: ${(p) => (p.color ? p.color : p.theme.primary)};
    margin: ${(p) => (p.margin ? p.margin : "0")};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${(p) => p.theme.grey_2};
    }
`;
