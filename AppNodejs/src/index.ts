import {Server} from './app';

async function main(){
    const app = new Server();
    await app.listen();
}



main();