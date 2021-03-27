import { withTheme } from "styled-components";
import Navigation from "./navigation";
import Dates from "./dates";
import { Header4, FlexCol } from "../../../../styles";

function DateComponent({ theme, setStep, dt, setDt, setHour }) {
    const span = 7;

    return (
        <FlexCol>
            <Header4 color={theme.black}>1. Kies datum en tijd</Header4>

            <Navigation dt={dt} setDt={setDt} span={span} />

            <Dates
                dt={dt}
                setHour={setHour}
                span={span}
                setStep={setStep}
                setDt={setDt}
            />
        </FlexCol>
    );
}
export default withTheme(DateComponent);
