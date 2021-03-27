import { withTheme } from "styled-components";
import { DateTime } from "luxon";
import Name from "./name";
import Email from "./email";
import Phone from "./phone";
import appendZero from "../../../../utils/appendZeroToUnit";
import {
    validateEmail,
    validateName,
    validatePhone,
} from "../../../../../validations";
import {
    FlexCol,
    FlexRow,
    ButtonPrimary,
    Header4,
    TextItalic,
} from "../../../../styles";

function PersonalDataComponent({
    theme,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    setStep,
    dt,
    setDt,
    setHour,
    hour,
    error,
    setError,
}) {
    function goBack() {
        setDt(DateTime.now());
        setHour("");
        setStep(1);
    }
    function goFurther() {
        setError({});

        const isEmailValid = validateEmail(email);
        if (isEmailValid.type === "error") {
            return setError(isEmailValid);
        }
        const isNameValid = validateName(name);
        if (isNameValid.type === "error") {
            return setError(isNameValid);
        }
        const isPhoneValid = validatePhone(phone);
        if (isPhoneValid.type === "error") {
            return setError(isPhoneValid);
        }
        setStep(3);
    }
    return (
        <FlexCol>
            <TextItalic color={theme.secondary}>
                Datum: {appendZero(dt.day)}-{appendZero(dt.month)}-{dt.year} om{" "}
                {hour} uur.
            </TextItalic>

            <Header4 margin="2.7rem auto" color={theme.black}>
                2. Persoonlijk gegevens
            </Header4>

            <Name name={name} setName={setName} error={error} />

            <Email email={email} setEmail={setEmail} error={error} />

            <Phone phone={phone} setPhone={setPhone} error={error} />

            <FlexRow justify="space-between" fixedWidth="35rem">
                <ButtonPrimary type="button" onClick={goBack}>
                    Ga Terug
                </ButtonPrimary>
                <ButtonPrimary type="button" onClick={goFurther}>
                    Ga Verder
                </ButtonPrimary>
            </FlexRow>
        </FlexCol>
    );
}

export default withTheme(PersonalDataComponent);
