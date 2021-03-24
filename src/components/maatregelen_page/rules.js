import styled, { withTheme } from "styled-components";
import { Section, Header3, Line } from "../../styles";
import { RULES as data } from "../../data/rules";

function RulesComponent({ theme }) {
    return (
        <Section margin="2.7rem 1.4rem">
            <Header3 color={theme.black}>De Maatregelen</Header3>
            <Line />
            <List>
                {data.map((rule) => {
                    return (
                        <li wide color={theme.grey_3}>
                            {rule}
                        </li>
                    );
                })}
            </List>
        </Section>
    );
}
export default withTheme(RulesComponent);

const List = styled.ul`
    margin: 2.7rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
        text-align: center;
        font-size: 1.9rem;
        color: ${(p) => p.theme.grey_3};
        margin: 1.4rem 0;
    }
`;
