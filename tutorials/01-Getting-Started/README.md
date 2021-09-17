# Let's Get a Website Up and Running

## Github
### Sign Up for an Account
Go to https://github.com and sign up for a new account. You will receive an email with confirmation code that is required in order to complete registration.

![Image1](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/00-github-signup.png)

When asked about your role, select just yourself as a student. When asked about additional plugins, select skip personalization.

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/01-github-questions.png)

### Create Website Repository
Once you complete registration, next we'll continue to create a repository where we'll store files pertaining to our website.

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/02-github-new-repo.png)

Here's a preview of repository details

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/03-github-new-repo-preview.png)

After the repo has been created, next we will add specific files that make a website run. We'll discuss in deeper detail these files as well.

### Hapi Server Basics
A website is built on a web server. The minimum software code needed to start up a server is as follows:

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-index.png)

In your Github repo, go to  `Add file` > `Create new file`, then you will need to enter filename as shown on the image above. When you finish adding file content, you will then commit your work with an optional comment.

The code from the image above is shown below for easy copy/paste. 

```javascript
// Declare Server constants and modules
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const Path = require('path');
const Hapi = require('@hapi/hapi');

// Create new instance of Hapi server
const server = Hapi.server({
    port: port,
    host: hostname,
    routes: {
            files: {
                relativeTo: Path.join(__dirname)
            }
        }
});

// Register @hapi/inert to serve static content
server.register( require('@hapi/inert') ).then( () => {
    // Add static content to be served from any number of directory paths, if only path specified we automatically serve index.html
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

    server.start().then( () => { console.log('Server running on %s', server.info.uri); });    
});

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

```

### NodeJS + NPM
After we setup the server, we then need to define the package manager file which pertains to the NodeJS community. Node Package Manager (npm) is a community driven respository of trusted and vetted solutions/libraries that developers commonly leverage to achieve larger abstractions. We will leverage the HapiJS server framework in the next tutorial which will be store in the dependencies section. Using HapiJS will enable declarative server configurations with minimal overhead for increased productivity.

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-package.png)

Similar to index.js file, create a new file called `package.json` and enter the following details for it.

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
```

### Hosting Configuration
Heroku (second dependency after Github) is the platform that facilitates hosting, and also comes with its own script to know how to launch your server. We include this file to be ready for deployment to Heroku, in its simple terms it invokes the server file, index.js, to be run in the NodeJs run-time environment.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-procfile.png" />

Similar to the previous files, create a new file called `Procfile` with the following content within it.

```
web: node index.js

```

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-repo-files.png" />

### HTML Content
Now we will create a folder called `public`, and inside add an `index.html`. The file contents are below:

```html
<!-- public/index.html -->
<html>
    <head>
        <!-- THIS IS A COMMENT; MORE OF THESE FOR GUIDANCE-->
        <title>Hola!</title>
        <!-- Below we include the stylesheet file with css extension -->
        <link href="/style.css" rel="stylesheet"/>
    </head>

    <body>
        <!-- Quick Message -->
        <h1>Hola!</h1>
    </body>
</html>
```
Similarly, we will setup our stylesheet file which will include the popular [Bootstrap](https://getbootstrap.com/) framework.

```css
/* public/style.css */
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");

/* below our import we can override anything we please */
```

### Summary
Your repo is now ready, you have the static server configured, and two static files ready to be served. Next, we will look at hosting setup via Heroku.

## Heroku
### Sign Up for an Account
Go to https://heroku.com and sign up for a new account. 

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/06-heroku-signup.png" />

You will receive an email with confirmation code that is required in order to complete registration.

### Create App
Next, start a new app. Heroku allows free hosting with the condition that your server has to sleep 8 hours per day, this gives you 10+ hours per day or enough time to learn the fundamentals and experiment before committing to paid hosting.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/07-heroku-new-app.png" />

Enter a unique app name, find one available.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/08-heroku-new-app-preview.png" />

### Connect Github Repository 
Navigate to the `Deploy` tab, then in `Deployment method` select `Github`. Lastly, click the `Connect to Github` button.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/09-heroku-deployment-github.png" />

Heroku will then redirect you to Github where you will have to authorize Heroku to transact with Github on your behalf. This is for Heroku to pull in data from your repository, then install any dependencies in package manager file. Click `Authorize heroku` to continue.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/10-authorize-heroku-to-your-github.png" />

After your Github is connected, you can then search for a specific repo. Search for the name of the repo we created in Github, the click `connect` button to set the origin of the code.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/11-search-your-repo-in-github-and-connect.png" />

After you have a Github repository connected, you can now configure to automate the building of your site whenever new code changes are added to any designated branch, in our case we use just the `main`.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/12-auto-manual-deploy.png" />

### Deploy Heroku App
The last step needed to get our Github server into a production environment is to execute the launch process from the `Deploy` tab in Heroku. This first deployment will be manual since we already have the repo ready to go.

After deployment completes, you will see a success message along with a link to open up the new site you created.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/13-deploy-successful.png" />

When you click the link to view your app, it should open up a new tab showing you the single message you defined for all server routes.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/14-heroku-app-preview.png" />

### Congratulations! You have now created a repository for your website, defined package manager, and setup pipeline for deployments. You may proceed to review additional [tips](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/01-Getting-Started/tips.md), and then go to [Unit 2](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/02-Hapi-Server/README.md) where we will introduce a server library for greater productivity.
