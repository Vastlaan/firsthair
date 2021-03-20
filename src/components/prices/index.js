import styled, { withTheme } from "styled-components";
import { respond, ContainerNarrow, FlexCol, Header3, Line } from "../../styles";

function PricesComponent({ theme }) {
    return (
        <ContainerNarrow>
            <FlexCol margin="4.7rem auto">
                <Header3 color={theme.black}>Behandelingen & Prijzen</Header3>
                <Line />
            </FlexCol>
            <Prices></Prices>
        </ContainerNarrow>
    );
}

export default withTheme(PricesComponent);

const Prices = styled.div`
    display: flex;
    flex-direction: column;

    ${() =>
        respond(
            "m",
            "display: grid; grid-template-columns: 15rem 1fr; grid-gap: 1.4rem;"
        )}
`;
