import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import Link from "next/link";
import { respond, fonts } from "../../../styles";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";

export default function LinksComponent({ displayMenu, isMobile }) {
    const list = useRef();

    useEffect(() => {
        displayMenu
            ? gsap.to(list.current, { y: "100%", duration: 0.3 })
            : gsap.to(list.current, {
                  y: "0",

                  duration: 0.3,
              });
    }, [displayMenu]);

    return (
        <LinksList ref={list}>
            <Link href="/">
                <LinkItem>Diensten</LinkItem>
            </Link>
            <Link href="/">
                <LinkItem>Galerij</LinkItem>
            </Link>
            <Link href="/">
                <LinkItem>Contact</LinkItem>
            </Link>
            <a href="https://www.google.com/maps/place/First+Hair/@52.5095632,4.944381,15z/data=!4m5!3m4!1s0x0:0x963c1c3b6fc280b3!8m2!3d52.5095632!4d4.944381">
                <Address>
                    <IoLocationOutline />
                    <p>Westerstraat 45, 1441 AR Purmerend</p>
                </Address>
            </a>
            <a href="tel:0299450325">
                <Address>
                    <IoCallOutline />
                    <p>0299 450 325</p>
                </Address>
            </a>
            <Link href="/">
                <Afspraak>Afspraak</Afspraak>
            </Link>
        </LinksList>
    );
}

const LinksList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;

    left: 0;
    right: 0;
    bottom: 100%;
    z-index: -1;
    padding: 2.7rem;
    padding-top: 10rem;
    background-color: ${(p) => p.theme.tertiary};

    ${() =>
        respond(
            "m",
            `
                position: static;
                padding: 0;
                background-color: transparent;
                flex-direction: row;
                align-items: center;
            `
        )}
`;
const LinkItem = styled.li`
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    color: ${(p) => p.theme.white};
    margin: 1.4rem 0 1.4rem 0;
    font-weight: 300;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: ${(p) => p.theme.primary};
    }

    ${() =>
        respond(
            "m",
            `
                margin: 0;
                margin-right: 1.4rem;
            `
        )}
`;

const Address = styled.li`
    display: flex;
    align-items: center;
    margin: 1.4rem 0 1.4rem 0;

    ${() =>
        respond(
            "m",
            `
                margin: 0;
                margin-right: 1.4rem;
            `
        )}

    svg {
        color: ${(p) => p.theme.primary};
        font-size: 2.2rem;
        margin-right: 0.9rem;
    }
    p {
        font-family: ${fonts.heading};
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 1.3;
        color: ${(p) => p.theme.grey_2};
    }
`;

const Afspraak = styled.button`
    border: 1px solid ${(p) => p.theme.primary};
    padding: 0.9rem 1.4rem;
    background-color: transparent;
    color: ${(p) => p.theme.primary};
    font-family: ${fonts.heading};
    letter-spacing: 0.15rem;
    font-weight: 300;
    text-transform: uppercase;
    box-shadow: 0 0 1rem ${(p) => p.theme.primary};

    margin: 1.4rem 0 1.4rem 0;

    ${() => respond("m", ` margin: 0; `)}
`;
