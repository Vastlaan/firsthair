import { DateTime } from "luxon";
import styled, { withTheme } from "styled-components";
import Day from "./day";
import { fonts, respond, Text } from "../../../../../styles";
import appendZero from "../../../../../utils/appendZeroToUnit";
import shortDaysToDutch from "../../../../../utils/shortDaysToDutch";
import { HOURS, HOURS_SAT } from "../../../../../utils/hours";

export default function WeekdayComponent({ dt, i }) {
    return (
        <WeekdayField>
            <p>{shortDaysToDutch(dt.plus({ day: i }).toFormat("ccc"))}</p>
        </WeekdayField>
    );
}

const WeekdayField = styled.div`
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
        color: ${(p) => p.theme.secondary};
    }
`;
