import styled from "styled-components";
import {
    respond,
    fonts,
    Header4,
    TextItalic,
    Text,
    FlexCol,
    FlexRow,
    ImageStory,
} from "../../styles";
import { CONTACT as data } from "../../data/story";
import { IoCallSharp, IoMailSharp, IoLogoFacebook } from "react-icons/io5";

export default function ContactComponent() {
    return (
        <Contact>
            <FlexCol>
                <ImageStory>
                    <img
                        src="./img/story_2.jpg"
                        alt="beste kappers in Purmerend"
                    />
                </ImageStory>
            </FlexCol>
            <Content>
                <TextItalic>{data.category}</TextItalic>
                <Header4 margin="1.4rem">{data.title}</Header4>
                <Text align="left">{data.body}</Text>
                <FlexRow margin="1.4rem 0">
                    <a href="tel:0299450325">
                        <Address>
                            <IoCallSharp />
                            <p>0299 450 325</p>
                        </Address>
                    </a>
                </FlexRow>
                <FlexRow margin="1.4rem 0">
                    <a href="mailto:info@itcontext.nl">
                        <Address>
                            <IoMailSharp />
                            <p>info@firsthair.nl</p>
                        </Address>
                    </a>
                </FlexRow>
                <FlexRow margin="1.4rem 0">
                    <a href="https://www.facebook.com/First-Hair-665490813512845">
                        <Address>
                            <IoLogoFacebook />
                            <p>Volg ons op Facebook</p>
                        </Address>
                    </a>
                </FlexRow>
            </Content>
        </Contact>
    );
}

const Contact = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    ${() =>
        respond("s", "flex-direction: row; justify-content: space-between;")}
`;

const Address = styled.div`
    display: flex;
    align-items: center;
    margin: 1.4rem 0;

    ${() =>
        respond(
            "m",
            `
                margin: 0;
                margin-right: 1.4rem;
            `
        )}

    svg {
        color: ${(p) => p.theme.primary};
        font-size: 2.7rem;
        margin-right: 0.9rem;
    }
    p {
        font-family: ${fonts.heading};
        font-size: 1.9rem;
        font-weight: 300;
        line-height: 1.3;
        color: ${(p) => p.theme.grey_2};
    }
`;

const Content = styled(FlexCol)`
    ${() =>
        respond("s", `align-items: flex-start; justify-content: flex-start;`)}

    p {
        text-align: center;
        ${() => respond("s", `text-align: left;`)}
    }
`;
