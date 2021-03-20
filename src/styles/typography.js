import styled from "styled-components";
import { fonts } from "./fonts";

// Headers

export const Header1 = styled.h3`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    font-size: 5.7rem;
    font-weight: 300;
    color: ${(p) => (p.color ? p.color : p.theme.grey_1)};
    line-height: 1.3;
    text-transform: uppercase;
    text-align: center;
    max-width: 95rem;
    letter-spacing: 0.2rem;

    span {
        color: ${(p) => (p.color2 ? p.color2 : p.theme.primary)};
    }
`;

export const Header3 = styled.h3`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    font-size: 4.7rem;
    font-weight: 300;
    color: ${(p) => (p.color ? p.color : p.theme.grey_1)};
    line-height: 1.3;
    font-family: ${fonts.para};
    text-align: center;
    max-width: 65rem;
`;

// Paragraphs

export const Text = styled.p`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    font-size: 1.9rem;
    text-align: center;
    max-width: ${(p) => (p.wide ? "65rem" : "45rem")};
    color: ${(p) => (p.color ? p.color : p.theme.grey_2)};
`;

export const TextItalic = styled.p`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    font-size: 2.2rem;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: ${(p) => (p.color ? p.color : p.theme.primary)};
`;

// brand name logo

export const Brand = styled.h1`
    font-size: 7.7rem;
    line-height: 1;
    font-weight: 300;
    color: ${(p) => p.theme.white};
`;
export const BrandSub = styled.p`
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: ${(p) => p.theme.grey_2};
`;
