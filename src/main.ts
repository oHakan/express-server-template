import dotenv from 'dotenv';

dotenv.config();

import ExpressServer from "./server";
import { initDataSource } from './data-source';
import RedisClient from './redis-client';

function run(){
    const server = new ExpressServer();

    RedisClient.getClient();
    
    server.start();

    initDataSource();
}

run();