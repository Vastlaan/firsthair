import styled, { withTheme } from "styled-components";
import { respond, BigText, ButtonSecondaryReverse } from "../../styles";

function SuccessfullyMadeAppointment({ theme, message, action }) {
    return (
        <Modal>
            <ContentBox>
                <BigText color={theme.grey_1}>{message}</BigText>
                <ButtonSecondaryReverse margin="2.7rem auto" onClick={action}>
                    Prima
                </ButtonSecondaryReverse>
            </ContentBox>
        </Modal>
    );
}

export default withTheme(SuccessfullyMadeAppointment);

const Modal = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ContentBox = styled.div`
    width: 35rem;
    padding: 2.7rem 1.4rem;
    background-color: ${(p) => p.theme.black};
    border: 1px solid ${(p) => p.theme.primary};
    box-shadow: 0 0 1rem rgba(240, 180, 91, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;

    ${() => respond("s", "width: 55rem;")}
`;
