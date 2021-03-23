import { useRouter } from "next/router";
import {
    FlexRow,
    ButtonSecondaryReverse,
    ButtonSecondary,
} from "../../../styles";

export default function ButtonsContainer() {
    const router = useRouter();

    return (
        <FlexRow>
            <ButtonSecondaryReverse
                onClick={() => router.push("/afspraak")}
                margin="0 1.4rem 0 0"
            >
                Afspraak
            </ButtonSecondaryReverse>
            <ButtonSecondary onClick={() => router.push("/contact")}>
                Contact
            </ButtonSecondary>
        </FlexRow>
    );
}
