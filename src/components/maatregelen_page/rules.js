import { withTheme } from "styled-components";
import { Section, Header3, Line, List } from "../../styles";
import { RULES as data } from "../../data/rules";

function RulesComponent({ theme }) {
    return (
        <Section margin="2.7rem 1.4rem">
            <Header3 color={theme.black}>De Maatregelen</Header3>
            <Line />
            <List>
                {data.map((rule, i) => {
                    return (
                        <li key={i} color={theme.grey_3}>
                            {rule}
                        </li>
                    );
                })}
            </List>
        </Section>
    );
}
export default withTheme(RulesComponent);
