import express from 'express';
import { indexRouter } from './routers';

export default class ExpressServer {
    private server: express.Application;
    private port: number = 3000;

    constructor(){
        this.server = express();
    }

    private config(){
        this.server.use(indexRouter);
    }

    public start(){
        try {
            this.config();
            this.server.listen(this.port);
            console.log('Express Server Has Started!')
        } catch (e) {
            console.log(e);
        }
    }
}