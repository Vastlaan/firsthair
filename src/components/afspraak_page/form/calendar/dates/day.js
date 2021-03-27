import styled from "styled-components";
import { fonts, respond } from "../../../../../styles";
import appendZero from "../../../../../utils/appendZeroToUnit";

export default function DayComponent({ dt, i }) {
    return (
        <Day>
            <p>
                {appendZero(dt.plus({ day: i }).day)}-
                {appendZero(dt.plus({ day: i }).month)}
            </p>
        </Day>
    );
}
const Day = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(p) => p.theme.grey_2};
    border-top: 1px solid transparent;
    padding: 0.5rem;

    ${() => respond("s", "padding: 1.4rem;")}

    p {
        font-size: 1.6rem;
        font-family: ${fonts.heading};
        color: ${(p) => p.theme.black};
    }
`;
