import { useState, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { FlexCol, Header3, TextItalic, Text } from "../../../styles";

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
                {headerData.small_header[iteration]}
            </TextItalic>
            <Header3 className="landing__header--text">
                {headerData.header[iteration]}
            </Header3>
            <Text className="landing__header--text">
                {headerData.text[iteration]}
            </Text>
        </Main>
    );
}

const Main = styled(FlexCol)`
    margin: 4.7rem auto;
    min-height: 50vh;
    max-height: 50vh;
`;

const headerData = {
    small_header: ["passie voor haarverzorging", "ambachtelijke kapper"],
    header: [
        "De kapper in het centrum van Prumerend",
        "Ontspan, Voel zich Geweldig en Zelfverzekerd",
    ],
    text: [
        `De topstylisten van First Hair hebben een passie voor haarverzorging en fashion. 
        Al onze kapsters hebben ruime ervaring in het kappersvak opgebouwd. 
        Zo weet u als klant zeker dat uw haar bij ons altijd in goede handen is.`,

        `First Hair is de ambachtelijke kapper waar met zorg geselecteerde producten en materialen wordt gewerkt. 
        We kijken niet naar de tijd, maar hebben alleen maar oog voor het haar. 
        Alle aandacht gaat naar jou.`,
    ],
};
