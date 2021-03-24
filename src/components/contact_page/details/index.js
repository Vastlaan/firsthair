import styled, { withTheme } from "styled-components";
import { Header3, FlexCol, Line } from "../../../styles";
import Buttons from "./buttons";

function DetailsComponent({ theme }) {
    return (
        <Details>
            <FlexCol>
                <Header3 color={theme.black}>Contact</Header3>
                <Line />
            </FlexCol>

            <Buttons />
        </Details>
    );
}

export default withTheme(DetailsComponent);

const Details = styled.div`
    margin: 4.7rem auto;
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;
`;
