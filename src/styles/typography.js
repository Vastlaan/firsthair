import styled from "styled-components";
import { fonts } from "./fonts";

// Headers

export const Header3 = styled.h3`
    font-size: 4.7rem;
    font-weight: 300;
    color: ${(p) => p.theme.grey_1};
    line-height: 1.3;
    font-family: ${fonts.para};
    text-align: center;
    max-width: 65rem;
`;

// Paragraphs

export const Text = styled.p`
    font-size: 1.9rem;
    text-align: center;
    max-width: 45rem;
    color: ${(p) => p.theme.grey_2};
`;

export const TextItalic = styled.p`
    font-size: 2.2rem;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: ${(p) => p.theme.primary};
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
