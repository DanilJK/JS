const app = require('./api');
const db = require('./db').default;
const config = require('./config');

async function bootstrap() {
    await db.init(`${config.database.connectionString}`);
    return  app.listen(`${config.server.port}`);
}
bootstrap()
    .then((server) => {
        console.log(`🚀 Server listening on port ${server.address().port}!`);
    })
    .catch(err => {
        setImmediate(() => {
            console.error('Unable to run the server because of the following error:');
            console.error(err);
            process.exit();
        });
    });