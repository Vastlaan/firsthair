import { useState, useEffect } from "react";
import styled from "styled-components";
import Links from "./links";
import Logo from "./logo";
import MenuButton from "./menu_button";

export default function NavigationComponent() {
    const [isMobile, setIsMobile] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false);

    useEffect(() => {
        function setDimensions() {
            const innerWidth = window.innerWidth;

            if (innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        setDimensions();

        window.addEventListener("resize", setDimensions);

        return () => window.removeEventListener("resize", setDimensions);
    }, []);

    return (
        <Navigation>
            <Logo />

            <MenuButton setDisplayMenu={setDisplayMenu} isMobile={isMobile} />

            <Links displayMenu={displayMenu} isMobile={isMobile} />
        </Navigation>
    );
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 0.9rem 2.7rem;
    background-color: rgba(30, 30, 36, 0.9);
    display: flex;
    align-items: center;
    z-index: 99;
`;
