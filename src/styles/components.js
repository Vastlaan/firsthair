import styled from "styled-components";
import respond from "./respond";
import { fonts } from "./fonts";

export const Photo = styled.div`
    margin-bottom: 1.4rem;
    overflow: hidden;
    object-position: center;
    border: 3px solid ${(p) => p.theme.black};
    position: relative;
    box-shadow: 0 0 1rem ${(p) => p.theme.black};

    ${() => respond("m", "margin-bottom: 0;")}

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
        font-weight: 300;
        text-transform: lowercase;
        font-family: ${fonts.heading};
        background-color: ${(p) => p.theme.black};
        color: ${(p) => p.theme.primary};
        box-shadow: 0.3rem 0.2rem 0.5rem rgba(0, 0, 0, 0.6);
    }
`;

export const ImageStory = styled.div`
    margin: 2.7rem;
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
