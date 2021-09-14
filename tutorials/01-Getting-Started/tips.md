# Tips
## Console Log
You'll notice within the server file, index.js, we output a console.log message which dynamically prints a message in the logs.
These logs can be viewed in Heroku for your convenience by going to `More` drop down, then select `View logs`

![Image](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/01-Getting-Started/images/tips-1.png)

## Heroku App Crash
We recommend to setup auto deploy, and everytime you make additions to Github repo you will be able to see the preview quickly. Whenever an app crashes, you will see the
following:

![Image](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/01-Getting-Started/images/tips-3.png)

On the above scenario, we modified the server port and hostname to failed at Heroku router not being able to bind to it since it did not startup correctly within its runtime container. Whenever you see a crash on your server, or any processing logs, be sure to visit the Logs to understand why your server is failing. For apps that fail to load, you will need to fix the problem before returning to a stable rendering state. If the app crashes during runtime like processing a request, then Heroku automatically restarts the app but you should fix the runtime bug as soon as possible.

Below is a scenario where the app did not start correctly, and the logs show error at the router service

![Image](https://github.com/build-a-website/my-personal-site/blob/main/tutorials/01-Getting-Started/images/tips-2.png)

