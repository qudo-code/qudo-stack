import { drizzle } from "drizzle-orm/node-postgres";

const DATABASE_URL = process.env.DATABASE_URL;

// @ts-ignore
export const db = drizzle(DATABASE_URL);

export {
    user,
    table,
    type Table
} from "./schema";

export {
    createInsertSchema,
    createSelectSchema
} from "drizzle-typebox";
