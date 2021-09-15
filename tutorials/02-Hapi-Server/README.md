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
// Declare Server constants and modules
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const Hapi = require('@hapi/hapi');

// Create new instance of Hapi server
const server = Hapi.server({
    port: port,
    host: hostname
});

// Configure route to handle all requests
server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => {
        return 'Hola!';
    }
});

// Start the server
server.start().then( () => {
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

First, we will update our dependency file to include a module that declaratively abstracts the find and response headers associated with any media files such as pdf, powerpoint, png, jpeg, movies, etc.
```json
{
  "name": "my-personal-site",
  "version": "1.0.0",
  "description": "",
  "dependencies": { 
    "@hapi/hapi": "20.1.5",
    "@hapi/inert": "6.0.4"
  }
}
````

```javascript
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const Path = require('path');
const Hapi = require('@hapi/hapi');

const server = Hapi.server({
    port: port,
    host: hostname,
    routes: { // Adds routes to files relative to current directory
            files: {
                relativeTo: Path.join(__dirname)
            }
        }
});

// Register @hapi/inert to serve static content
server.register( [require('@hapi/inert')] ).then( () => {

    // Add static content to be served from any number of directory paths, if only path specified we automatically serve index.html
    server.route({
        method: 'GET',
        path: '/{any*}',
        handler: {
            directory: {
                path: ['public'],
                index: ['index.html']
            }
        }
    });

    server.start().then( () => {
        console.log('Server running on %s', server.info.uri);
    });    
});
```

With the code above, we added dynamic asset linking to our folder `public` where we can store any type of file. Now, let's go ahead and create this folder, and add an `index.html` file, followed by a `styles.css`, and lastly a `script.js`

Now, let's setup our `index.html` as follows:

```html
<!-- index.html -->
<html>
    <head>
        <!-- THIS IS A COMMENT; MORE OF THESE FOR GUIDANCE-->
        <title>Hola!</title>
        <!-- Below we include the stylesheet file with css extension -->
        <link href="style.css" rel="stylesheet"/>
    </head>

    <body>
        <!-- Quick Message -->
        <h1>Hola!</h1>
    </body>
    <!-- Below we connect our script code -->
    <script type="application/javascript" src="/script.js"></script>
</html>
```

Next, we will setup our stylesheet file which will include the popular [Bootstrap](https://getbootstrap.com/) framework.

```css
/* style.css */
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css");

/* below our import we can override anything we please */
```

Finally, let's setup our script file so that it includes the JavaScript plugin for Bootstrap.

```javascript
/* script.js */
const bootScript = document.createElement('script');
bootScript.type = 'application/javascript';
bootScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js';
document.body.appendChild( bootScript );
```

At this stage, we now have a static content server which we can create content directly into HTML files, and leverage styling and scripts from Bootstrap to quickly build a website. To show that your static content site is working correctly, you will need to inspect network traffic and ensure you the see the following.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/02-Hapi-Server/images/HapiJS-static-content.png" />