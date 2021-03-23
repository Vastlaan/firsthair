import styled from "styled-components";
import {
    respond,
    CustomLink,
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
                        <CustomLink>
                            <IoCallSharp />
                            <p>0299 450 325</p>
                        </CustomLink>
                    </a>
                </FlexRow>
                <FlexRow margin="1.4rem 0">
                    <a href="mailto:info@itcontext.nl">
                        <CustomLink>
                            <IoMailSharp />
                            <p>info@firsthair.nl</p>
                        </CustomLink>
                    </a>
                </FlexRow>
                <FlexRow margin="1.4rem 0">
                    <a href="https://www.facebook.com/First-Hair-665490813512845">
                        <CustomLink>
                            <IoLogoFacebook />
                            <p>Volg ons op Facebook</p>
                        </CustomLink>
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

const Content = styled(FlexCol)`
    ${() =>
        respond("s", `align-items: flex-start; justify-content: flex-start;`)}

    p {
        text-align: center;
        ${() => respond("s", `text-align: left;`)}
    }
`;
