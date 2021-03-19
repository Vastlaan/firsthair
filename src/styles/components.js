import styled from "styled-components";

export const Photo = styled.div`
    overflow: hidden;
    object-position: center;
    border: 3px solid ${(p) => p.theme.tertiary};
    img {
        display: block;
        object-fit: cover;
    }
`;
