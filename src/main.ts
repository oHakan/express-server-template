import dotenv from 'dotenv';

dotenv.config();

import ExpressServer from "./server";
import { initDataSource } from './data-source';

function run(){
    const server = new ExpressServer();

    server.start();

    initDataSource();
}

run();