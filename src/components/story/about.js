import styled from "styled-components";
import {
    respond,
    Header4,
    TextItalic,
    Text,
    FlexCol,
    ImageStory,
} from "../../styles";
import { ABOUT as data } from "../../data/story";

export default function AboutComponent() {
    return (
        <About>
            <Content>
                <TextItalic>{data.category}</TextItalic>
                <Header4 margin="1.4rem">{data.title}</Header4>
                <Text align="left">{data.body}</Text>
            </Content>
            <FlexCol>
                <ImageStory>
                    <img
                        src="./img/story_1.jpg"
                        alt="beste kappers in Purmerend"
                    />
                </ImageStory>
            </FlexCol>
        </About>
    );
}
const About = styled.div`
    margin-bottom: 8.7rem;
    display: flex;
    flex-direction: column;
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
