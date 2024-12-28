import { LibSQLDatabase } from "drizzle-orm/libsql/driver-core.js";
import { Measure } from "./database";
import { eq, sql, like } from "drizzle-orm";

import { Schema } from "./index"
import db from "../db";

class MeasureRepo {
    private db: LibSQLDatabase<Schema>
    constructor() {
        this.db = db;
    }

    async addMeasure(unit: string) {
        let res = await this.db.insert(Measure).values({
            unit,
            createdAt: sql`(datetime('now'))`,
        })
        return res

    }

    async findMeasureById(id: string) {
        return await this.db.select().from(Measure).where(eq(Measure.id, id))
    }
    async findMeasureByName(unit: string) {
        return await this.db.select().from(Measure).where(like(Measure.unit, `%${unit}%`))

    }
    async getAllMeasure() {
        return await this.db.select().from(Measure).where(eq(Measure.is_deleted, false))
    }
    async deleteMeasure(id: string) {
        return await this.db.update(Measure).set({ is_deleted: true }).where(eq(Measure.id, id))

    }

    async updateMeasure(id: string, unit: string) {
        return await this.db.update(Measure).set({ unit }).where(eq(Measure.id, id)).returning()

    }
}

export default MeasureRepo;