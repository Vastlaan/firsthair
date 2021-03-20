import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";

export default function MenuButtonComponent({ setDisplayMenu, isMobile }) {
    return (
        <MenuButton
            isMobile={isMobile}
            onClick={() => {
                setDisplayMenu((prevState) => !prevState);
            }}
        >
            <IoMenuOutline />
        </MenuButton>
    );
}

const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    display: ${(p) => (p.isMobile ? "flex" : "none")};
    align-items: center;
    justify-content: center;

    svg {
        font-size: 4.7rem;
        color: ${(p) => p.theme.grey_1};
    }
`;
