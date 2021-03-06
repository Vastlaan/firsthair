import styled from "styled-components";
import Day from "./day";
import Weekday from "./weekday";
import Hours from "./hours";
import { respond } from "../../../../../styles";

export default function DatesComponent({
    dt,
    span,
    setHour,
    setStep,
    setDt,
    existingAppointments,
}) {
    const iterations = [];
    for (let i = 1; i <= span; i++) {
        iterations.push(i);
    }

    function selectDayAndHour(dt, h) {
        setHour(h);
        setDt(dt);
        setStep(2);
    }
    return (
        <Grid>
            {iterations.map((i) => {
                const appointmentsExist = existingAppointments.filter(
                    (appointment) =>
                        appointment.day === dt.plus({ day: i }).day &&
                        appointment.month === dt.plus({ day: i }).month &&
                        appointment.year === dt.plus({ day: i }).year
                );
                return (
                    <GridColumn key={`column-${i}`}>
                        <Day i={i} dt={dt} />

                        <Weekday i={i} dt={dt} />

                        <Hours
                            i={i}
                            dt={dt}
                            selectDayAndHour={selectDayAndHour}
                            appointmentsExist={appointmentsExist}
                        />
                    </GridColumn>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 5rem);

    ${() => respond("s", "grid-template-columns: repeat(7, 7rem);")}
`;
const GridColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
