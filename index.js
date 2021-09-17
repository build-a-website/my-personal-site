const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const Path = require('path');
const Hapi = require('@hapi/hapi');

const server = Hapi.server({
    port: port,
    host: hostname,
    routes: {
            files: {
                relativeTo: Path.join(__dirname)
            }
        }
});

server.register( require('@hapi/inert') ).then( () => {

    server.route({
        method: 'GET',
        path: '/{any*}',
        handler: {
            directory: {
                path: ['public'],
                index: ['index.html'],
                defaultExtension: 'html'
            }
        }
    });

    server.start().then( () => {
        console.log('Server running on %s', server.info.uri);
    });    
});

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
