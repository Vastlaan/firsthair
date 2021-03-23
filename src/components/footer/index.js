import styled from "styled-components";
import Logo from "./logo";
import Links from "./links";
import Copyright from "./copyright";
import { FlexCol } from "../../styles";

export default function FooterComponent() {
    return (
        <Footer>
            <Logo />

            <Links />

            <Copyright />
        </Footer>
    );
}

const Footer = styled(FlexCol)`
    background-color: ${(p) => p.theme.black};
    padding: 2.7rem 1.4rem;
`;
