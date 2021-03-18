import styled from "styled-components";

export default function LogoComponent() {
    return (
        <Logo>
            <img src="./img/logo_first_hair_white.svg" alt="logo first hair" />
        </Logo>
    );
}
const Logo = styled.div`
    margin-right: auto;
    display: flex;
    align-items: center;

    img {
        width: 4.7rem;
        height: 4.7rem;
    }
`;
