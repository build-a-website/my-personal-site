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

### Website Basics
A website is built on a web server. The minimum software code needed to start up a server is as follows:

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-index.png)

The code from the image above is shown below for easy copy/paste. We begin by including the `http` module to enable creation of a web server. In order to create a web server, we need to know two specific details about the configuration. The first is the hostname, or ip address, of the server. We use `0.0.0.0` in order to leave it open ended, and delegate the run-time environment to pickup its respective ip address. Next we have the port number, port number is like an apartment number to an address (ip address). We use `process.env.PORT` in order to delegate whatever port the run-time environment provides and a fallback to 3000 by using `||`.

After we define hostname and port for the intial configuration, we configure the server with a single handler as follows `.createServer( (request, response) => { ... })`. This will be a catch all traffic call that takes in the `request` object with data coming from the client, and responds via the `response` object.

Lastly, we then invoke the listener function where we pass in the port and hostname.

```javascript
const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

After we setup the server, we then need to define the package manager file which pertains to the NodeJS community. Node Package Manager (npm) is a community driven respository of trusted and vetted solutions/libraries that developers commonly leverage to achieve larger abstractions. We will leverage the HapiJS server framework in the second unit which we'll store in the dependencies section. Using HapiJS will enable declarative server configurations with minimal overhead for increased productivity.

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-package.png)

```
{
  "name": "my-personal-site",
  "version": "1.0.0",
  "description": "",
  "dependencies": { }
}
```

Heroku (second dependency after Github) is the platform that facilitates hosting, and also comes with its own script to know how to launch your server. We include this file to be ready for deployment to Heroku, in its simple terms it invokes the server file, index.js, to be run in the NodeJs run-time environment.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-procfile.png" />


```
web: node index.js

```

Here we see the list of files we have on our repo. Your own should look the same, we have the ##index.js## file which is our server, the ##package.json## which stores information about the project particularly on the package manager dependencies, and lastly the ##Procfile## which is used by Heroku to launch your server.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-repo-files.png" />


<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/06-heroku-signup.png" />

## Heroku
### Sign Up for an Account
Go to https://heroku.com and sign up for a new account. You will receive an email with confirmation code that is required in order to complete registration.
![Image1](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/07-heroku-signup.png)

Next, start a new app:

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/07-heroku-new-app.png" />

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/08-heroku-new-app-review.png" />


<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/09-heroku-deployment-github.png" />

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/10-authorize-heroku-to-your-github.png" />

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/11-search-your-repo-in-github-and-connect.png" />


<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/12-auto-manual-deploy.png" />

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/13-deploy-successful.png" />

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/14-heroku-app-preview.png" />
