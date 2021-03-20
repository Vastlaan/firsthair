import styled from "styled-components";
import respond from "./respond";

export const Photo = styled.div`
    margin-bottom: 1.4rem;
    overflow: hidden;
    object-position: center;
    border: 3px solid ${(p) => p.theme.tertiary};
    position: relative;

    ${() => respond("m", "margin-bottom: 0")}

    img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 25rem;
    }

    &::before {
        content: "${(p) => (p.desc ? p.desc : "Content goes here")}";
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.9rem;
        font-size: 1.6rem;
        background-color: ${(p) => p.theme.tertiary};
        color: ${(p) => p.theme.white};
    }
`;
