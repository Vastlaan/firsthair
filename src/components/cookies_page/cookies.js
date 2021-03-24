import { withTheme } from "styled-components";
import { Section, Header3, Text, Line, List } from "../../styles";
import { COOKIES as data } from "../../data/cookies";

function CookiesComponent({ theme }) {
    return (
        <Section margin="2.7rem 1.4rem">
            <Header3 color={theme.black}>Cookie Statement</Header3>
            <Line />
            <Text wide>
                Dit Privacybeleid is bedoeld om u te informeren over hoe wij
                informatie verzamelen en gebruiken die u zou kunnen
                identificeren, zoals uw naam, e-mailadres, adres, andere
                contactgegevens of online identifiers, andere informatie die u
                ons verstrekt bij het gebruik van het Platform
                ("Persoonsgegevens") alsook de door ons gebruikte Cookies. Neem
                de tijd om dit Privacybeleid zorgvuldig door te nemen.
            </Text>
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
export default withTheme(CookiesComponent);
