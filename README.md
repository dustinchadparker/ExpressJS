#REQUIRED

1. Create a new project using npm init.
2. Install express and save it to your package.json file using --save.
3. Create an express server that responds to the root get request ('/') with "Hello from the web server side...".
4. Listen on port 3000.
5. Use express.static to serve files from a folder named public in the root of your project.
6. Create an index.html file.
7. Create a styles.css file in a css directory in public.
8. Create an app.js file in a js directory in public.
9. Create your own middleware using app.use that console.logs every req.url and passes flow to the next function

#ADVANCED
1. Add Bootstrap to your index.html.
2. Create a form that posts to a route on your express server.
3. Write the values from the form post to a json file on your server.
4. Remember to set the action of the form to your route.
5. Change the method of the form to POST.
6. Create a route /formsubmissions that reads the file and responds with the results.