import { DateTime } from "luxon";
import styled, { withTheme } from "styled-components";
import { respond, Text } from "../../../../styles";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function NavigationComponent({ dt, setDt, span, theme }) {
    const startDate = dt.plus({ day: 1 });
    const endDate = dt.plus({ day: span });

    function customFormat(dt) {
        return dt.toLocaleString(DateTime.DATE_MED).split(",")[0];
    }
    function weekForward(dt) {
        if (
            dt.plus({ day: 7 }).startOf("day") >
            DateTime.now().plus({ day: 61 }).startOf("day")
        ) {
            return;
        } else {
            return setDt((prevState) => prevState.plus({ day: 7 }));
        }
    }
    function weekBackward(dt) {
        if (
            dt.minus({ day: 7 }).startOf("day") < DateTime.now().startOf("day")
        ) {
            return;
        } else {
            return setDt((prevState) => prevState.minus({ day: 7 }));
        }
    }
    return (
        <Navigation>
            <ButtonPlain type="button" onClick={() => weekBackward(dt)}>
                <IoChevronBackOutline />
            </ButtonPlain>
            <DateSpan>
                <Text color={theme.black}>
                    {customFormat(startDate)} - {customFormat(endDate)}
                </Text>
            </DateSpan>
            <ButtonPlain type="button" onClick={() => weekForward(dt)}>
                <IoChevronForwardOutline />
            </ButtonPlain>
        </Navigation>
    );
}

export default withTheme(NavigationComponent);

const Navigation = styled.div`
    margin: 2.7rem auto 0 auto;
    padding: 0.9rem 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 35rem;
    min-width: 35rem;

    border: 1px solid ${(p) => p.theme.grey_2};

    ${() => respond("s", "max-width: 49rem; min-width: 49rem;")}
`;

const ButtonPlain = styled.button`
    background-color: transparent;

    svg {
        font-size: 2.7rem;
    }
`;

const DateSpan = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
