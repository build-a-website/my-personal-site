'use strict';

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: port,
        host: hostname
    });
  
    server.route({
        method: 'GET',
        path: '/{any*}',
        handler: (request, h) => {

            return 'Hola Mundo!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
