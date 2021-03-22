import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { BilboardContainer, BigText, Header1, FlexRow } from "../../styles";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { REVIEWS as data } from "../../data/reviews";

export default function ReviewsComponent() {
    const animatedElement = useRef();
    const [review, setReview] = useState(1);

    useEffect(() => {
        const element = animatedElement.current;
        gsap.set(element, { clearProps: "all" });
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });

        tl.to(element, {
            autoAlpha: 0,
            x: "-100%",
            duration: 1,
            delay: 4,
        })
            .set(element, { autoAlpha: 0, x: "100%" })
            .call(() => {
                setReview((prevState) => {
                    switch (prevState) {
                        case 1:
                            return 2;
                        case 2:
                            return 3;
                        case 3:
                            return 1;
                        default:
                            return 1;
                    }
                });
            })
            .to(element, {
                autoAlpha: 1,
                x: "0",
                duration: 1,
                stagger: 0.3,
            });
    }, []);

    return (
        <BilboardContainer url="./img/reviews.jpg">
            <Header1>Klantwaardering</Header1>
            <FlexRow margin="2.7rem 0">
                <Note>4.6</Note>
                <Star>
                    <IoStar />
                </Star>
                <Star>
                    <IoStar />
                </Star>
                <Star>
                    <IoStar />
                </Star>
                <Star>
                    <IoStar />
                </Star>
                <Star>
                    <IoStarHalf />
                </Star>
            </FlexRow>

            <Reviews ref={animatedElement}>
                <QuoteOpen>
                    <FaQuoteLeft />
                </QuoteOpen>
                <BigText wide>
                    {data.find((each) => each.id === review).text}
                </BigText>
                <QuoteClose>
                    <FaQuoteRight />
                </QuoteClose>
            </Reviews>
        </BilboardContainer>
    );
}

const Note = styled.div`
    padding: 0 1.4rem;
    margin-right: 1.4rem;
    font-size: 4.7rem;
    border: 1px solid ${(p) => p.theme.primary};
    color: ${(p) => p.theme.primary};
`;
const Star = styled.div`
    margin-right: 1.4rem;

    svg {
        font-size: 4.7rem;
        color: ${(p) => p.theme.primary};
    }
`;

const Reviews = styled(FlexRow)`
    position: relative;
    padding: 1.4rem;
    min-height: 15rem;
    max-height: 15rem;
`;
const QuoteOpen = styled.div`
    position: absolute;
    top: -2.7rem;
    left: -2.7rem;
    svg {
        font-size: 4.7rem;
        color: ${(p) => p.theme.grey_2};
    }
`;
const QuoteClose = styled.div`
    position: absolute;
    bottom: -2.7rem;
    right: -2.7rem;
    svg {
        font-size: 4.7rem;
        color: ${(p) => p.theme.grey_2};
    }
`;
