import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { useRouter } from "next/router";
import { ContainerNarrow } from "../../../styles";
import Calendar from "./calendar";
import PersonalData from "./personal_data";
import Confirmation from "./confirmation";
import Modal from "../../modals/successfullyMadeAppointment";

export default function Form() {
    const [step, setStep] = useState(1);
    const [dt, setDt] = useState(DateTime.now());
    const [hour, setHour] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState({});
    const [existingAppointments, setExistingAppointments] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);

    const router = useRouter();

    async function makeAppointment(e) {
        e.preventDefault();

        const dataToSend = {
            time: hour,
            day: dt.day,
            month: dt.month,
            year: dt.year,
            name,
            email,
            phone,
        };

        const res = await fetch("/api/setAppointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        });
        const data = await res.json();

        if (data.error) {
            return setError(data.error);
        }

        // reset state and display modal
        setStep(1);
        setDt(DateTime.now());
        setHour("");
        setDisplayModal(true);
    }

    function getAppointments() {
        fetch("/api/getAppointments")
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    console.error(data.error);
                }
                setExistingAppointments(data.appointments);
            })
            .catch((e) => {
                console.error(e);
            });
    }

    // function to trigger on modal's button click
    function redirectToLandingPage() {
        return router.push("/");
    }

    useEffect(() => {
        getAppointments();
    }, []);

    function renderComponent() {
        switch (step) {
            case 1:
                return (
                    <Calendar
                        setStep={setStep}
                        dt={dt}
                        setDt={setDt}
                        setHour={setHour}
                        existingAppointments={existingAppointments}
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
            {displayModal && (
                <Modal
                    setModal={setDisplayModal}
                    action={redirectToLandingPage}
                    message="We hebben jouw verzoek in goede orde ontvangen! Je zult binnen enkele minuten bevestiging van je afspraak via e-mail ontvangen."
                />
            )}
        </ContainerNarrow>
    );
}
