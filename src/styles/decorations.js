import styled from "styled-components";

export const Line = styled.div`
    width: ${(p) => (p.width ? p.width : "10rem")};
    height: 1px;
    background-color: ${(p) => (p.color ? p.color : p.theme.secondary)};
    margin: ${(p) => (p.margin ? p.margin : "1.4rem auto")};
`;
