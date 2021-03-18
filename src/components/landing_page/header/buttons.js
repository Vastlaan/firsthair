import { FlexRow, ButtonPrimary, ButtonSecondary } from "../../../styles";

export default function ButtonsContainer() {
    return (
        <FlexRow>
            <ButtonPrimary margin="0 1.4rem 0 0">Afspraak</ButtonPrimary>
            <ButtonSecondary>Contact</ButtonSecondary>
        </FlexRow>
    );
}
