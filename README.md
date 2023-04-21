# To-Do-List

!In order to work, NodeJS and its modules must be installed at first.
ABOUT THIS PROJECT
In this project

ABOUT THIS PROJECT  
In this project we will use EJS to create template for the app.
Template was used incase we want to create many sites with similar structure.
Hier, we try to create Todo-lists for different purposes: daily and working, etc. which means these sites look almost the same so it would be great if we only have to create a template and then use it for every sites :)
Let go through each step:
*Step 1: Create project folder and additional files (app.js, etc.)
*Step 2: npm init, install express, body-parser and nodemon (if needed)
*Step 3: To be able to use EJS with express, install ejs (version for express, instruction online)
*Step 4: Create folder 'views' and a file which name '<index>.ejs'
    Once installed ejs then index.ejs will be the template. Server will automatic search the ejs file in views-folder
*Step 5: In app.js: Set up express, body-parser; create app; set up ejs, etc.
*Step 6: Do calculations, functions or any necessary things in JavaScript (hier is find the current date) and send the data back to the ejs-file through res.render("nameOfEjsFile", nameOfVariable : itsValue);
    Incase of sending more than 1 Variable => seperate them by a comma like this:
    res.render("nameOfEjsFile", nameOfVariable : itsValue , nameOfVariable2 : itsValue2);
