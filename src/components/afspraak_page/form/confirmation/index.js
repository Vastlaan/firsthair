import styled, { withTheme } from "styled-components";
import appendZero from "../../../../utils/appendZeroToUnit";
import {
    fonts,
    FlexCol,
    FlexRow,
    ButtonPrimary,
    Header4,
    TextItalic,
} from "../../../../styles";

function ConfirmationComponent({
    theme,
    name,
    email,
    phone,
    makeAppointment,
    setStep,
    dt,
    hour,
}) {
    function goBack() {
        return setStep(2);
    }
    return (
        <FlexCol>
            <Header4 margin="2.7rem auto" color={theme.black}>
                3. Bevestiging
            </Header4>

            <TextConfirmation>
                Datum: {appendZero(dt.day)}-{appendZero(dt.month)}-{dt.year} om{" "}
                {hour} uur.
            </TextConfirmation>

            <TextConfirmation>Naam: {name}</TextConfirmation>

            <TextConfirmation>E-mail: {email}</TextConfirmation>

            <TextConfirmation>Telefoon: {phone}</TextConfirmation>

            <FlexRow
                margin="2.7rem 0 0 0"
                justify="space-between"
                fixedWidth="35rem"
            >
                <ButtonPrimary onClick={goBack}>Ga Terug</ButtonPrimary>
                <ButtonPrimary onClick={makeAppointment}>
                    Bevestigen
                </ButtonPrimary>
            </FlexRow>
        </FlexCol>
    );
}

export default withTheme(ConfirmationComponent);

const TextConfirmation = styled.p`
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    color: ${(p) => p.theme.black};
    letter-spacing: 0.15rem;
    margin: 0.9rem auto;
    text-align: center;
`;
