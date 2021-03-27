import { useState } from "react";
import { DateTime } from "luxon";
import { ContainerNarrow } from "../../../styles";
import { validateEmail } from "../../../../validations";
import Calendar from "./calendar";
import PersonalData from "./personal_data";
import Confirmation from "./confirmation";

export default function Form() {
    const [step, setStep] = useState(1);
    const [dt, setDt] = useState(DateTime.now());
    const [hour, setHour] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState({});

    function makeAppointment(e) {
        e.preventDefault();
        console.log(dt.day, dt.month, dt.year, hour);

        // validate Email
        const isEmailValid = validateEmail(email);
    }

    function renderComponent() {
        switch (step) {
            case 1:
                return (
                    <Calendar
                        setStep={setStep}
                        dt={dt}
                        setDt={setDt}
                        setHour={setHour}
                    />
                );
            case 2:
                return (
                    <PersonalData
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        phone={phone}
                        setPhone={setPhone}
                        setStep={setStep}
                        dt={dt}
                        hour={hour}
                        setDt={setDt}
                        setHour={setHour}
                        error={error}
                        setError={setError}
                    />
                );
            case 3:
                return (
                    <Confirmation
                        name={name}
                        email={email}
                        phone={phone}
                        setStep={setStep}
                        dt={dt}
                        hour={hour}
                        makeAppointment={makeAppointment}
                    />
                );

            default:
                return (
                    <Date
                        setStep={setStep}
                        dt={dt}
                        setDt={setDt}
                        setHour={setHour}
                    />
                );
        }
    }

    return (
        <ContainerNarrow>
            <form onSubmit={makeAppointment}>{renderComponent()}</form>;
        </ContainerNarrow>
    );
}
