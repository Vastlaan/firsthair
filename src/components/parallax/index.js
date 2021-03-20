import React from "react";
import styled from "styled-components";
import { Header1, Line, Text } from "../../styles";

export default function ParallaxBackground({ title, body }) {
    return (
        <Container>
            <Header1 margin="0 0 2.7rem 0">
                {title
                    .split(" ")
                    .map((word, i) =>
                        i === 1 ? <span>{word} </span> : word + " "
                    )}
            </Header1>
            <Text align="center">{body}</Text>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 1.4rem;
    height: 48rem;
    background-image: linear-gradient(
            to bottom,
            rgba(33, 27, 8, 0.8),
            rgba(33, 27, 8, 0.8)
        ),
        url(${(p) => (p.url ? p.url : "./img/landing-header-background-2.jpg")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
