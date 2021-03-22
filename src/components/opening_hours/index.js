import styled, { withTheme } from "styled-components";
import { FlexCol, TextItalic, Text, Header3, Line } from "../../styles";
import { OPENINGS_HOURS as data, CONTENT } from "../../data/opening_hours";

function OpeningHoursComponent({ theme }) {
    return (
        <FlexCol margin="4.7rem auto">
            <TextItalic color={theme.secondary}>{CONTENT.category}</TextItalic>
            <Header3 color={theme.black}>{CONTENT.title}</Header3>
            <Line />
            <Text margin="0 0 1.4rem 0" color={theme.grey_3}>
                {CONTENT.body}
            </Text>

            <FlexCol>
                {data.map((each, i) => {
                    return (
                        <Grid key={i}>
                            <Text color={theme.grey_3} align="left">
                                {each.day}
                            </Text>
                            <Text color={theme.grey_3}>
                                {each.from} - {each.to}
                            </Text>
                        </Grid>
                    );
                })}
            </FlexCol>
        </FlexCol>
    );
}

export default withTheme(OpeningHoursComponent);

const Grid = styled.div`
    margin: 1.4rem auto;
    display: grid;
    grid-template-columns: 25rem 10rem;
    grid-gap: 2.7rem;
    justify-content: center;
`;
