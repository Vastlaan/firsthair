import styled from "styled-components";
import { fonts } from "./fonts";

export const ButtonPrimary = styled.button`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    border: 1px solid ${(p) => p.theme.primary};
    padding: 0.9rem 1.4rem;
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.black};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;

    &:hover {
        box-shadow: 0 0 1rem rgba(240, 180, 91, 0.6);
    }
`;

export const ButtonSecondary = styled.button`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    border: 1px solid ${(p) => p.theme.primary};
    padding: 0.9rem 1.4rem;
    background-color: transparent;
    color: ${(p) => p.theme.primary};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    &:hover {
        box-shadow: 0 0 1rem rgba(240, 180, 91, 0.6);
    }
`;
