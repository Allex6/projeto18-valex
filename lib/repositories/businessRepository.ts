import postgres from "./../databases/postgres";
import { TransactionTypes } from "./cardRepository";

export interface Business {
  id: number;
  name: string;
  type: TransactionTypes;
}

export async function findById(id: number) {
  const result = await postgres.query<Business, [number]>(
    "SELECT * FROM businesses WHERE id=$1",
    [id]
  );

  return result.rows[0];
}