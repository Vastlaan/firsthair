import Link from "next/link";
import { Logo } from "../../../styles";

export default function LogoComponent() {
    return (
        <Link href="/">
            <Logo>
                <img
                    src="./img/logo_first_hair_white.svg"
                    alt="logo first hair"
                />
            </Logo>
        </Link>
    );
}
