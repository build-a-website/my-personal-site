# Leverage HapiJS Server Framework
For this unit, we will continue to configure our server, and we will upgrade to [HapiJS](https://hapi.dev/tutorials/) in order to leverage greater productivity.

Installing HapiJS will consist of adding the dependency to the **package.json**, you can proceed to modify your package manager file as follows:

```json
{
  "name": "my-personal-site",
  "version": "1.0.0",
  "description": "",
  "dependencies": { 
    "@hapi/hapi": "20.1.5"
  }
}
````

Next, we will modify the server file, **index.js**, as follows:

```javascript

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const Hapi = require('@hapi/hapi');

const server = Hapi.server({
    port: port,
    host: hostname
});
  
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hola Mundo!';
    }
});

server.start().then( server => {
  console.log('Server running on %s', server.info.uri);
});  

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
```

