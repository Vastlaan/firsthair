import knex from "knex";

export default class Database {
    constructor() {
        this.db = knex({
            client: "pg",
            connection: process.env.DB_CONNECTION_STRING,
        });
    }

    getDatabase() {
        return this.db;
    }

    getAppointments() {
        const appointments = this.db("appointments").select("*")[0];
        console.log(appointments);
        this.db.destroy();
        return appointments;
    }
}
