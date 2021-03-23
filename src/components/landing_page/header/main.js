import { useState, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { FlexCol, Header3, TextItalic, Text } from "../../../styles";
import { HEADER_LANDING as data } from "../../../data/header_landing";

export default function MainComponent() {
    const [iteration, setIteration] = useState(0);

    useEffect(() => {
        const nodeList = document.querySelectorAll(".landing__header--text");
        gsap.set(nodeList, { clearProps: "all" });
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });

        tl.to(nodeList, {
            autoAlpha: 0,
            y: "-100%",
            duration: 1,
            delay: 4,
            stagger: 0.3,
        })
            .set(nodeList, { autoAlpha: 0, y: "100%" })
            .call(() => {
                setIteration((prevState) => (prevState === 0 ? 1 : 0));
            })
            .to(nodeList, {
                autoAlpha: 1,
                y: "0",
                duration: 1,
                stagger: 0.3,
            });
    }, []);

    return (
        <Main>
            <TextItalic className="landing__header--text">
                {data.small_header[iteration]}
            </TextItalic>
            <Header3 className="landing__header--text">
                {data.header[iteration]}
            </Header3>
            <Text className="landing__header--text">
                {data.text[iteration]}
            </Text>
        </Main>
    );
}

const Main = styled(FlexCol)`
    margin: 4.7rem auto;
    min-height: 28rem;
    max-height: 28rem;
`;
