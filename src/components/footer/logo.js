import { FlexRow, Logo } from "../../styles";

export default function LogoComponent() {
    return (
        <FlexRow>
            <Logo dimensions="9.7rem">
                <img
                    src="./img/logo_first_hair_white.svg"
                    alt="logo first hair"
                    width="97"
                    height="97"
                />
            </Logo>
        </FlexRow>
    );
}
