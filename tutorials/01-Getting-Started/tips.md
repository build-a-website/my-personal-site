# Tips
## Console Log
You'll notice within the server file, index.js, we output a console.log message which dynamically prints a message in the logs.
These logs can be viewed in Heroku for your convenience by going to `More` drop down, then select `View logs`

![Image](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/01-Getting-Started/images/tips-1.png)

## Local Development
### Code Editor
For this micro-course you will be able to succeed in building a website without using a code editor, however, your iterations to add new features may take longer. Using a code editor on your local machine will allow quick updates that you can validate quickly before deploying to Heroku. Our recommended code editor is [Visual Code](https://code.visualstudio.com/).

### NodeJS
Along with a code editor, you will need to install NodeJS in your local machine in order for the code editor to be able to run code locally. Visit [NodeJS.org](https://nodejs.org/en/) to install the programming language.

Within the code editor, you will have a [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface) located under `View` > `Terminal`. You will use the terminal to install dependencies using `npm i`, then to run your application use `node index.js`.

### Github
You don't have to download your repo from Github, then upload files manually or edit directly, instead we recommend [git](https://git-scm.com/) to be installed in your local machine. Then you can use `git clone https://github.com:<username>/<repo>.git` to pull your repo, then `git add .` to add all modified filed, followed by `git commit -m 'sample commit message'` to save, and finally `git push https://<personal-token>@github.com/build-a-website/my-personal-site.git` to upload all your changes to Github which will trigger an automatic build. By then you should have already iterated extensively on your local. If you use git utility, you will need to generate [personal access tokens](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to replace your passwords.

Here is a simple flow to create a new file, save/commit using git, then push up to the server

![Image](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/01-Getting-Started/images/tips-4-git.png)

### Support
The local development setup may prove to be toughest challenge, but once you get it right, it will save you alot of time because you will iterate quickly to build new features. If you get stuck, please send email to `rjezuz` at gmail dot com, and reference this micro-course to quickly setup a debugging session over Zoom.

## Heroku
We recommend to setup auto deploy, and everytime you make additions to Github repo you will be able to see the preview quickly. 

### App Crash
Whenever an app crashes, you will see the
following:

![Image](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/01-Getting-Started/images/tips-3.png)

On the above scenario, we modified the server port and hostname to failed at Heroku router not being able to bind to it since it did not startup correctly within its runtime container. Whenever you see a crash on your server, or any processing logs, be sure to visit the Logs to understand why your server is failing. For apps that fail to load, you will need to fix the problem before returning to a stable rendering state. If the app crashes during runtime like processing a request, then Heroku automatically restarts the app but you should fix the runtime bug as soon as possible.

Below is a scenario where the app did not start correctly, and the logs show error at the router service

![Image](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/01-Getting-Started/images/tips-2.png)

## Glossary of Terms

* [CSS](https://en.wikipedia.org/wiki/CSS) - Domain specific style sheet language used for describing the presentation of a document written in HTML
* [Github](https://en.wikipedia.org/wiki/GitHub) - Free software code storage and version control service that enabled open-source code base
* [HapiJS](https://hapi.dev/) - Web application framework for NodeJS, built by Walmart Labs. Enables multiple declarative features for building Node web servers, with easy of configuration, extensibility and large number of community plugins
* [Heroku](https://en.wikipedia.org/wiki/Heroku) - Web Platform for managing pipeline to launch Web Applications (servers) with extensive plugin solutions such as databases, emails, etc.
* [HTML](https://en.wikipedia.org/wiki/HTML) - Domain specific markdown language designed to be displayed on a web browser
* [JSON](https://en.wikipedia.org/wiki/JSON) - JavaScript Object Notation is an open standard file format as well as a data exchange format suited for communication between servers and clients while at the same time being descriptive as human-readable text
* [NodeJS](https://en.wikipedia.org/wiki/Node.js) - Open source server-side scripting JavaScript runtime environment that enables building full-stack web applications with a single programming language
* [Open Source](https://en.wikipedia.org/wiki/Open_source) - Source code that is freely available for use, modification, and redistribution
* [Server](https://en.wikipedia.org/wiki/Server_(computing)) - A web application hosted behind a domain name or ip address which can be accessed via clients, such as a browser, and provides functionality for other software called clients.
