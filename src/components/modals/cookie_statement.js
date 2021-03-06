import { useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import gsap from "gsap";
import { fonts, ButtonSecondaryReverse } from "../../styles";

export default function CookieStatementComponent() {
    const target = useRef();

    function hideStatement() {
        window.localStorage.setItem("firsthaircookiestatement", true);
        gsap.to(target.current, { autoAlpha: 0, y: "100%" });
    }

    useEffect(() => {
        const isAgreed = window.localStorage.getItem(
            "firsthaircookiestatement"
        );

        if (!isAgreed) {
            gsap.to(target.current, { autoAlpha: 1, y: 0, duration: 0.3 });
        }
    });

    return (
        <CookiesStatement ref={target}>
            <CustomText wide>
                Wij gebruiken cookies! Om je de best mogelijke ervaring te
                bieden op onze website, gebruiken wij en derde partijen
                technieken zoals cookies.{" "}
                <Link href="/cookies">
                    <span>Lees meer</span>
                </Link>{" "}
                over wat de cookies zijn en hoe gebruiken wij cookies.
            </CustomText>
            <ButtonSecondaryReverse
                margin=".9rem 1.4rem"
                onClick={hideStatement}
            >
                Ga Akkord
            </ButtonSecondaryReverse>
        </CookiesStatement>
    );
}

const CookiesStatement = styled.section`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.4rem 2.7rem;
    background-color: ${(p) => p.theme.black};
    transform: translateY(100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    visibility: hidden;
    opacity: 0;
    border: 3px solid ${(p) => p.theme.primary};
`;

const CustomText = styled.p`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    color: ${(p) => (p.color ? p.color : p.theme.grey_1)};
    line-height: 1.3;
    letter-spacing: 0.15rem;
    text-align: ${(p) => (p.align ? p.align : "center")};

    span {
        text-decoration: underline;
        color: ${(p) => p.theme.primary};
        cursor: pointer;
    }
`;

const ButtonSmall = styled.button`
    margin: 1.4rem;
    padding: 0.6rem 0.9rem;
    background-color: #04917c;
    border: 1px solid #04917c;
    font-family: ${fonts.heading};
    font-weight: 300;
    color: ${(p) => (p.color ? p.color : p.theme.grey_1)};
    letter-spacing: 0.15rem;
`;
