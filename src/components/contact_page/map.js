import styled, { withTheme } from "styled-components";
import { respond, Section, FlexCol, Header3, Line } from "../../styles";

function MapComponent({ theme }) {
    return (
        <Section margin="4.7rem auto">
            <FlexCol>
                <Header3 color={theme.black}>Route</Header3>
                <Line />
            </FlexCol>
            <Map>
                <iframe
                    title="route-map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.276577189312!2d4.944381!3d52.5095632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x963c1c3b6fc280b3!2sFirst%20Hair!5e0!3m2!1sen!2snl!4v1616579375736!5m2!1sen!2snl"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </Map>
        </Section>
    );
}

export default withTheme(MapComponent);

const Map = styled.div`
    iframe {
        width: 280px;
        height: 250px;
        ${() =>
            respond(
                "s",
                `width: 500px;
                height: 350px;`
            )}
        ${() =>
            respond(
                "xl",
                `width: 650px;
                height: 400px;`
            )}
    }
`;
