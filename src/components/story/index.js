import styled from "styled-components";
import About from "./about";
import Contact from "./contact";
import { ContainerNarrow } from "../../styles";

export default function StoryComponent() {
    return (
        <Story>
            <ContainerNarrow>
                <About />
                <Contact />
            </ContainerNarrow>
        </Story>
    );
}

const Story = styled.section`
    margin: 4.7rem 0;
    padding: 4.7rem 1.4rem;
    background-color: ${(p) => p.theme.black};
`;
