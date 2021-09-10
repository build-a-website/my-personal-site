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
A website is built on a web server. The minimal programming needed to start up a server is as follows:

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-index.png)

The code from the image above is shown below. We begin by including the `http` module which enables creation of a web server. In order to create a web server, we need to know two specific details about the configuration. The first is the hostname, or ip address, of the server. We use `0.0.0.0` in order to leave it open ended, and delegate the run-time environment to pickup it's respective ip address. Next we have the port number, port number is like an apt number to an address (ip address). We use `process.env.PORT` in order to delegate whatever port the run-time environment want's to provide.

After we predefine the intial configuration, we configure the server will a single handler via `.createServer( (request, response) => { ... })`. This will be a catch all traffic call that takes in the `request` object with data coming from the client, and responds via the `response` object.

After we configure the server, we then invoke the listener function where we pass in the port and hostname.
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

After we define a website, we then need to define the package manager file that pertains to the programming language we are using, in this case NodeJS.
![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-package.png)

```
{
  "name": "my-personal-site",
  "version": "1.0.0",
  "description": "",
  "dependencies": { }
}
```

Heroku is the platform that facilitates hosting, and also comes with it's own script to know what to launch.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-procfile.png" />


```
web: node index.js

```

Here we see the list of files we have on our repo. Your own should look the same:

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
