import { withTheme } from "styled-components";
import { FlexCol, Header3, Line } from "../../styles";

function HeadingComponent({ theme }) {
    return (
        <FlexCol margin="4.7rem auto">
            <Header3 color={theme.black}>Plan je afspraak in 3 stappen</Header3>
            <Line />
        </FlexCol>
    );
}
export default withTheme(HeadingComponent);
