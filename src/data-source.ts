import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});

export async function initDataSource(){
    try {
        await AppDataSource.initialize();
        console.log('TypeORM Initialized!')
    } catch (e) {
        throw(e);
    }
}