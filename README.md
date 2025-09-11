# Counselling

Counselling service provided in Somerset West and Online for all ages. Open Monday-Friday.

"homepage": "https://aniqajohnsoncounselling.co.za",

Step 1: clone off github
    - On Github, on the repo, click on the code button 
    - Copy the https line 
    - On VS code, click the source control
    - Click clone repo 
    - Paste the https 
    
Step 2: Run 'npm install'
    - Once the repo is cloned, open a terminal, cd into the code base 
    - Run 'npm install'

Step 3: Run 'npm start' to boot up a live server
    - Once all the files have been installed, run 'npm start' to boot up a server

Step 4: Rebase codebase to QA
    - run 'git checkout <branch name>'
    - Run 'git checkout qa'
    - This will change the branch from prod to qa 

Step 5: Make changes, commit and push
    - Vercel is already set up so once the repo is cloned and all the files installed, once you push changes to github, it will automatically deploy to vercel
    - These changes will deploy on the QA branch which you can use to demo to Aniqa 
