import Database from "../../database";

export default async function handler(req, res) {
    const db = new Database().getDatabase();

    try {
        const appointments = await db("appointments").select(
            "day",
            "month",
            "year",
            "time"
        );
        db.destroy();
        res.status(200).json({ appointments });
    } catch (e) {
        db.destroy();
        console.error(e);
        res.status(400).json({ error: "Could not fetch appointments" });
    }
}
