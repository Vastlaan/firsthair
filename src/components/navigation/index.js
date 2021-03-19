import styled from "styled-components";
import Links from "./links";
import Logo from "./logo";

export default function NavigationComponent() {
    return (
        <Navigation>
            <Logo />
            <Links />
        </Navigation>
    );
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 0.9rem 2.7rem;
    background-color: rgba(30, 30, 36, 0.7);
    display: flex;
    align-items: center;
    z-index: 99;
`;
