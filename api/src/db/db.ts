import { Db, MongoClient } from 'mongodb';

const URL = 'mongodb://localhost:27017';
const DB_NAME = 'go-groceries';

let database: Db;

export async function connectMongo() {
    const client = new MongoClient(URL);
    await client.connect();

    database = client.db(DB_NAME);

    return database;
}

export function db() {
    return database;
}
