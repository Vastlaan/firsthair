import styled from "styled-components";
import { fonts, respond } from "../../../../../styles";
import { HOURS, HOURS_SHORT } from "../../../../../utils/hours";

export default function HoursComponent({
    dt,
    i,
    selectDayAndHour,
    appointmentsExist,
}) {
    if (dt.plus({ day: i }).weekday === 7) {
        return (
            <HourField key={`hour-sunday}`} busy>
                <p>dicht</p>
            </HourField>
        );
    } else if (dt.plus({ day: i }).weekday === 1) {
        return (
            <Hours>
                {HOURS_SHORT.map((h) => {
                    if (
                        appointmentsExist &&
                        appointmentsExist.find((a) => a.time === h)
                    ) {
                        return (
                            <HourField key={`hour-sunday}`} busy>
                                <p>bezet</p>
                            </HourField>
                        );
                    }
                    return (
                        <HourField
                            key={`hour-${h}`}
                            onClick={() =>
                                selectDayAndHour(dt.plus({ day: i }), h)
                            }
                        >
                            <p>{h}</p>
                        </HourField>
                    );
                })}
            </Hours>
        );
    } else {
        return (
            <Hours>
                {HOURS.map((h) => {
                    if (
                        appointmentsExist &&
                        appointmentsExist.find((a) => a.time === h)
                    ) {
                        return (
                            <HourField key={`hour-sunday}`} busy>
                                <p>bezet</p>
                            </HourField>
                        );
                    }
                    return (
                        <HourField
                            key={`hour-${h}`}
                            onClick={() =>
                                selectDayAndHour(dt.plus({ day: i }), h)
                            }
                        >
                            <p>{h}</p>
                        </HourField>
                    );
                })}
            </Hours>
        );
    }
}

const Hours = styled.div`
    display: flex;
    flex-direction: column;
`;
const HourField = styled.div`
    margin: 2px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(p) => p.theme.black};
    background-color: ${(p) => (p.busy ? p.theme.secondary : p.theme.primary)};
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;

    ${() => respond("s", "padding: .5rem 1.4rem;")}

    &:hover {
        background-color: ${(p) => p.theme.black};

        p {
            color: ${(p) => p.theme.primary};
        }
    }

    p {
        font-size: 1.6rem;
        font-family: ${fonts.heading};
        color: ${(p) => (p.busy ? p.theme.white : p.theme.black)};
        transition: all 0.3s;
    }
`;
