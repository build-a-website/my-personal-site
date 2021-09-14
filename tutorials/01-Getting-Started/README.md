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

### Web Server Basics
A website is built on a web server. The minimum software code needed to start up a server is as follows:

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-index.png)

In your Github repo, go to  `Add file` > `Create new file`, then you will need to enter filename as shown on the image above. When you finish adding file content, you will then commit your work with an optional comment.

The code from the image above is shown below for easy copy/paste. 

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

We begin by including the `http` module to enable creation of a web server. In order to create a web server, we need to know two specific details about the configuration. The first is the hostname, or ip address, of the server. We use `0.0.0.0` in order to leave it open ended, and delegate the run-time environment to pickup its respective ip address. Next we have the port number, port number is like an apartment number to an address (ip address). We use `process.env.PORT` in order to delegate whatever port the run-time environment provides and a fallback to 3000 by using `||`.

After we define hostname and port for the intial configuration, we configure the server with a single handler as follows `.createServer( (request, response) => { ... })`. This will be a catch all traffic call that takes in the `request` object with data coming from the client, and responds via the `response` object.

Lastly, we then invoke the listener function where we pass in the port and hostname.

### NodeJS + NPM
After we setup the server, we then need to define the package manager file which pertains to the NodeJS community. Node Package Manager (npm) is a community driven respository of trusted and vetted solutions/libraries that developers commonly leverage to achieve larger abstractions. We will leverage the HapiJS server framework in the next tutorial which will be store in the dependencies section. Using HapiJS will enable declarative server configurations with minimal overhead for increased productivity.

![Image](https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-package.png)

Similar to index.js file, create a new file called `package.json` and enter the following details for it.

```
{
  "name": "my-personal-site",
  "version": "1.0.0",
  "description": "",
  "dependencies": { }
}
```

### Hosting Configuration
Heroku (second dependency after Github) is the platform that facilitates hosting, and also comes with its own script to know how to launch your server. We include this file to be ready for deployment to Heroku, in its simple terms it invokes the server file, index.js, to be run in the NodeJs run-time environment.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-procfile.png" />

Similar to the previous files, create a new file called `Procfile` with the following content within it.

```
web: node index.js

```

### Summary
Here we see the list of files we have on our repo. Your own should look the same, we have the **index.js** file which is our server, the **package.json** which stores information about the project, particularly on the package manager dependencies, and lastly the **Procfile** which is used by Heroku to launch your server. The other file **LICENSE** is to label this repository as open source under the MIT license which means you welcome sharing the code base for others to use without any liability.

<img src="https://raw.githubusercontent.com/build-a-website/my-personal-site/main/tutorials/01-Getting-Started/images/05-github-repo-files.png" />


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
