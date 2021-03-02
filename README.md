
<h1 align = "center"><b><a href = "https://603c113bd682050195888681--multiply-me.netlify.app/">Multiply Me</a></b></h1>


<p align = "center">
<img src = "public\featureImageMultiplyMe.PNG">
</p>

# Features

1. <b>Only Integer Input</b> - Both the input field only integer inputs, try typing in character or string inputs, you can't don't worry. Thanks to the JavaScript function `onKeyPress` combined with regular expressions. You cannot input negative numbers as well. I mean who would want to the multiplication table of -4 * 5 right.
2. <b>Default values are 1 and 5</b> - Sometimes user have the tendency to test the application without typing anything. In this case if you do so, both the fields will take the values 1 for the number and 5 as the range and display 1 * 1 till 1 * 5 as the result.
3. <b>Clear Buttons clear everything</b> - If you have so many numbers that are disturbing you, then just use the Clear button to clear them in a jiffy. 
4. <b>Very Responsive</b> - I have tested the application on my smart phone i.e. OnePlus 6T and worked perfectely well on the emulator as well. The application fits very well to any type of screens.
# Deployment

## Netlify is used to deploy the project on the internet

1. Create and set-up an Account in [Netlify](https://www.netlify.com/)
2. In your Visual Code Terminal Stop the Server using `Ctrl-C`
3. To create a production build use `yarn build` or `npm build` use it accordingly.
4. After successfull installations you will get a `build` folder in your project.
5. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) from the Visual Studio Code Terminal. 
6. Use the command to install netlify CLI - `npm install netlify-cli -g`
7. Sometimes you might get an error as `ps1 cannot be loaded because running scripts is disabled on this system`.
8. There are multiple ways to [solve](https://stackoverflow.com/questions/41117421/ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system) this. One of the easiest ways is to install Netlify on your <b>Main Command Prompt</b> not the Visual Studio Code one.
9. You need to login to Netlify using `netlify login`. Enter all the credentials to log in.
10. To deploy the project lastly you need to type `netlify deploy`.
11. If you get an error saying `site not found`, then you need to unlink it by saying `netlify unlink`
12. Make Sure you select "Create and Confiugure a new site". Sometimes it will ask your team name (Netlify Team Name).
13. You can choose a random site name or give a custom one. Make sure to give a unique one.
14. Provide the Build Directory as `./build`.
15. The suite would not yet been deployed from the given URL.
16. Go to your Netlify Dashboard to the project. Click on `Site has not yet been Deployed`. Again click on `Deploy Preview` this will unlock the `Preview Deploy` which is a temporary URL. 
17. After viewing the Preview, click on `Publish deploy` option to deploy your project.
18. Now you project is live and deployed on the internet. 
   

---

# GitHub Commands

Use the below given Git commands from the Visual Studio Code to either push, commit and pull to the GitHub Repository.

1. `git remote add origin add-your-git-link` - To connect to your GitHub Repository

2. `git add README.md` - To specifically add new files

3. `git commit README.md -m "Fixed the Typo"` - To commit file changes with a message 

4. `git push -u origin master` - To push the changes to the repository

5. `git pull origin master` - Before committing or pushing always pull the changes

6. `rm .git/index.lock` - Use the below command in the root directory of the application. This will delete the index.lock file and release the active lock


---