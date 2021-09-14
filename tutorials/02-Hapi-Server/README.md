# Leverage HapiJS Server Framework
For this unit, we will continue to configure our server, and we will upgrade to [HapiJS](https://hapi.dev/) in order to leverage greater productivity.

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
    path: '/{any*}',
    handler: (request, h) => {
        return 'Hola Mundo!';
    }
});

server.start().then( server => {
  console.log('Server running on %s', server.info.uri);
});  
```

The server above does the same thing as the previous NodeJs solution using the http module, however, we now abstract http underneath the @hapi/hapi package module. The code essentially does the same, configure hostname & port, then add a route handler for all GET requests, and lastly invoke the start function which yields a success callback where we write our console log that server started correctly. 

## Server API Routes
In the previous section we configured a route for the server, this consisted of a three attribute object passed into the route function. The first attribute is the method which tells the server what type of action you want to perform. Here are the common methods with short descriptions:

* GET - Read state
* POST - Create/Effect
* PUT - Update
* DELETE - Remove

Following the method, we define the path. A path is a location to a resource found on the server, it can have a physical location such as static files or abstraction handled by server without any physical location. The naming convention of a path typically gives insights towards what is affected on the server. For example, the path /users can retrieve a list of users via the GET method, and create a new user using the POST method. 

The combination of Method + Path yields a route configuration, and the third attribute is a function handler to process the request and invoke a response. The first parameter, request, holds the incoming request which includes method, path, query parameters, body/payload, and any request headers from the client. The second parameter is the response which includes attributes to set Status Codes, response headers, and any response data/message to send the client.

## Server Static Content
Server API routes are good for servers to talk to each other but when we want to serve static content we need to use HTML views. We will now extend our server to serve such views.

```javascript
const Path = require('path');

const server = Hapi.server({
    port: port,
    host: hostname,
    routes: {
            files: {
                relativeTo: Path.join(__dirname, 'static')
            }
        }
});

server.route({
    method: 'GET',
    path: '/{any*}',
    handler: {
        directory: {
            path: 'static'
        }
    }
});
```
