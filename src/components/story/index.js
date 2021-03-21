import styled from "styled-components";
import {
    respond,
    fonts,
    ContainerNarrow,
    Header4,
    TextItalic,
    Text,
    FlexCol,
    FlexRow,
} from "../../styles";
import { IoCallSharp, IoMailSharp, IoLogoFacebook } from "react-icons/io5";

export default function StoryComponent() {
    return (
        <Story>
            <ContainerNarrow>
                <About>
                    <FlexCol align="flex-start" justify="flex-start">
                        <TextItalic>hoe wij begonnen</TextItalic>
                        <Header4 margin="1.4rem">Het Verhaal van Ons</Header4>
                        <Text align="left">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Suscipit itaque recusandae ducimus in
                            deserunt. Reprehenderit animi quis ad odio optio,
                            explicabo fugiat libero assumenda qui, voluptatem
                            laboriosam porro tenetur cumque illo eum. Eum!
                        </Text>
                    </FlexCol>
                    <FlexCol>
                        <Image>
                            <img
                                src="./img/story_1.jpg"
                                alt="beste kappers in Purmerend"
                            />
                        </Image>
                    </FlexCol>
                </About>

                <Contact>
                    <FlexCol>
                        <Image>
                            <img
                                src="./img/story_2.jpg"
                                alt="beste kappers in Purmerend"
                            />
                        </Image>
                    </FlexCol>
                    <FlexCol align="flex-start" justify="flex-start">
                        <TextItalic>contact</TextItalic>
                        <Header4 margin="1.4rem">
                            Neem Contact met Ons op
                        </Header4>
                        <Text align="left">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Asperiores, temporibus?
                        </Text>
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
                                    <p>Volg ons op social media</p>
                                </Address>
                            </a>
                        </FlexRow>
                    </FlexCol>
                </Contact>
            </ContainerNarrow>
        </Story>
    );
}

const Story = styled.section`
    margin: 4.7rem 0;
    padding: 4.7rem 1.4rem;
    background-color: ${(p) => p.theme.black};
`;

const About = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8.7rem;
`;

const Image = styled.div`
    height: 30rem;
    width: 25rem;
    position: relative;
    box-shadow: 0 0 1.4rem rgba(240, 180, 91, 0.3);

    img {
        position: relative;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: 2;
    }

    &::after {
        content: "";
        position: absolute;
        top: 2.7rem;
        left: -2.7rem;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(240, 180, 91, 0.4);
        z-index: 1;
    }
`;

const Contact = styled.div`
    display: flex;
    justify-content: space-between;
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
