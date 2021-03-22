import React from "react";
import { Header1, BilboardContainer, Text } from "../../styles";

export default function ParallaxBackground({ title, body }) {
    return (
        <BilboardContainer>
            <Header1 margin="0 0 2.7rem 0">
                {title
                    .split(" ")
                    .map((word, i) =>
                        i === 1 ? <span key={i}>{word} </span> : word + " "
                    )}
            </Header1>
            <Text wide align="center">
                {body}
            </Text>
        </BilboardContainer>
    );
}
