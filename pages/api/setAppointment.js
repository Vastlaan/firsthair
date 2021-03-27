import Database from "../../database";
import { validateEmail, validateName, validatePhone } from "../../validations";

export default async function handler(req, res) {
    const { time, day, month, year, name, email, phone } = req.body;

    //validate fields

    if (!time || !day || !month || !year || !name || !email || !phone) {
        return res.status(400).json({
            error: {
                type: "error",
                field: "phone",
                message: "Alle velden zijn verplicht!",
            },
        });
    }

    const isNameValid = validateName(name);
    if (isNameValid.type === "error") {
        return res.status(400).json({ error: isNameValid });
    }
    const isEmailValid = validateEmail(email);
    if (isEmailValid.type === "error") {
        return res.status(400).json({ error: isEmailValid });
    }
    const isPhoneValid = validatePhone(phone);
    if (isPhoneValid.type === "error") {
        return res.status(400).json({ error: isPhoneValid });
    }

    const db = new Database().getDatabase();
    try {
        const appointment = await db("appointments")
            .insert({
                time,
                day,
                month,
                year,
                name,
                email,
                phone,
            })
            .returning("*");

        db.destroy();
        res.status(200).json({ appointment: appointment.rows });
    } catch (e) {
        db.destroy();
        console.error(e);
        res.status(400).json({ error: "Could not make appointment" });
    }
}
