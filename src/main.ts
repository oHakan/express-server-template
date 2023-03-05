import ExpressServer from "./server";

function run(){
    const server = new ExpressServer();

    server.start();
}

run();