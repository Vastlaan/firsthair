import {
    FlexRow,
    ButtonSecondaryReverse,
    ButtonSecondary,
} from "../../../styles";

export default function ButtonsContainer() {
    return (
        <FlexRow>
            <ButtonSecondaryReverse margin="0 1.4rem 0 0">
                Afspraak
            </ButtonSecondaryReverse>
            <ButtonSecondary>Contact</ButtonSecondary>
        </FlexRow>
    );
}
