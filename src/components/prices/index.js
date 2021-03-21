import { useState } from "react";
import styled, { withTheme } from "styled-components";
import { respond, ContainerNarrow, FlexCol, Header3, Line } from "../../styles";
import Categories from "./categories";
import Content from "./content";

function PricesComponent({ theme }) {
    const [category, setCategory] = useState(1);

    return (
        <ContainerNarrow>
            <FlexCol margin="4.7rem auto">
                <Header3 color={theme.black}>Behandelingen & Prijzen</Header3>
                <Line />
            </FlexCol>

            <Prices>
                <Categories category={category} setCategory={setCategory} />

                <Content category={category} />
            </Prices>
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
