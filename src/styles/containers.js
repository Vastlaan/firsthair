import styled from "styled-components";

export const Header = styled.header`
    padding: 2.7rem;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.6)
        ),
        url(${(p) => (p.url ? p.url : "./img/landing-header-background.jpg")});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(p) => (p.aling ? p.align : "center")};
    justify-content: ${(p) => (p.justify ? p.justify : "center")};
    margin: ${(p) => (p.margin ? p.margin : "0")};
    height: ${(p) => (p.fixedHeight ? p.fixedHeight : "auto")};
`;
export const FlexRow = styled.div`
    display: flex;
    align-items: ${(p) => (p.aling ? p.align : "center")};
    justify-content: ${(p) => (p.justify ? p.justify : "center")};
    margin: ${(p) => (p.margin ? p.margin : "0")};
`;
