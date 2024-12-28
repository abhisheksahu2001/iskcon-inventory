import db from "../db.js";
import { Measure } from "./database";
import { eq, sql } from "drizzle-orm";
class MeasureRepo {
    constructor() {
        this.db = db;
    }
    async addMeasure(unit) {
        let res = await this.db.insert(Measure).values({
            unit,
            createdAt: sql `(datetime('now'))`,
        });
        return res;
    }
    async findMeasureById(id) {
        return await this.db.select().from(Measure).where(eq(Measure.id, id));
    }
    async findMeasureByName(unit) {
        return await this.db.select().from(Measure).where(eq(Measure.unit, unit));
    }
    async deleteMeasure(id) {
        return await this.db.update(Measure).set(Measure.isDeleted, true).where(eq(Measure.id, id));
    }
    async updateMeasure(id, name) {
        return await this.db.update(Measure).set(Measure.unit, unit).where(eq(Measure.id, id));
    }
}
export default MeasureRepo;
