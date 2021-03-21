import styled from "styled-components";
import { fonts } from "./fonts";

export const ButtonPrimary = styled.button`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    padding: 0.9rem 2.7rem;
    background-color: ${(p) => (p.hovered ? p.theme.black : p.theme.primary)};
    color: ${(p) => (p.hovered ? p.theme.primary : p.theme.black)};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    border: 1px solid ${(p) => p.theme.black};

    &:hover {
        color: ${(p) => p.theme.primary};
        background-color: ${(p) => p.theme.black};
    }
`;

export const ButtonSecondary = styled.button`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    border: 1px solid ${(p) => p.theme.primary};
    padding: 0.9rem 2.7rem;
    background-color: transparent;
    color: ${(p) => p.theme.primary};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    &:hover {
        color: ${(p) => p.theme.black};
        background-color: ${(p) => p.theme.primary};
    }
`;
export const ButtonSecondaryReverse = styled.button`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    border: 1px solid ${(p) => p.theme.primary};
    padding: 0.9rem 2.7rem;
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.black};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;

    &:hover {
        color: ${(p) => p.theme.primary};
        background-color: transparent;
    }
`;
