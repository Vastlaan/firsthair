import Brand from "./brand";
import Main from "./main";
import Buttons from "./buttons";
import { Header } from "../../../styles";

export default function HeaderComponent() {
    return (
        <Header>
            <Brand />

            <Main />

            <Buttons />
        </Header>
    );
}
