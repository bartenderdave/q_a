# David's Q&A App 
by Bartender_Dave 
2021

# Description:
A simple Q&A-themed web application. Users have the ability to sign up and login, ask and answer questions, as well as, read, sort and search through existing ones. Viewing questions is available to all users, however in order to ask or answer questions the user has to be authenticated. Click the number of answers to view the answers page.

Technologies and Frameworks used: *Node.js, ExpressJS, MongoDB, Mongoose, bcrypt, JWT, EJS* (as well as obvious HTML and CSS).

# Deployment:
Follow the following steps to deploy the current project from your own github repository to a server:

1. Create a completely empty repository on GitHub (no README.md)
2. Change the current working directory on your computer to your local project
3. Execute the following commands:
        
        $ git init
        $ git add .
        $ git commit -m "First commit"
        $ git remote add origin remote_empty_repository_URL (use SSH url for private)
        $ git remote -v
        $ git push -u origin master

When using GitHub for express or any other node.js project create a file called .gitignore in the root directory of your project with the following content:
    
        .env
        node_modules
    
Next, simply build the application on the sever of your choice via GitHub.

In order for the server to properly build the application the procfile should include the follwoing:

        web: node app.js
    
# Suggestion: 
store the URL for the connection to the database directly on the commercially available server in a variable, and reference it from the code to achieve security.
