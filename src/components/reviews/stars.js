import styled from "styled-components";
import { respond } from "../../styles";
import { IoStar, IoStarHalf } from "react-icons/io5";

export default function StarsComponent() {
    return (
        <Stars>
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
        </Stars>
    );
}
const Stars = styled.div`
    display: flex;
    align-items: center;
    margin: 4.7rem 0;

    ${() => respond("s", "margin: 2.7rem 0;")}
`;

const Note = styled.div`
    padding: 0 1.4rem;
    margin-right: 1.4rem;
    font-size: 2.7rem;
    border: 1px solid ${(p) => p.theme.primary};
    color: ${(p) => p.theme.primary};

    ${() => respond("s", "font-size: 4.7rem;")}
`;
const Star = styled.div`
    margin-right: 1.4rem;

    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.primary};

        ${() => respond("s", "font-size: 4.7rem;")}
    }
`;
