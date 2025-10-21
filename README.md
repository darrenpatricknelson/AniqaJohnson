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

Step 6: Create a Pull request
    - On the Prod branch on github, create a PR
    - Click on pull requets and create new pull request
    - Base = Prod. Compare = qa
    - Create PR and Merge

This will automatically deploy to vercel Production and be live for Aniqa

And just like that, you're setup and ready to work from any pc


----------------------------------------

Layout:
- Images folder
    - Conversstion corner (Old - Image over 2 couches)
    - Cover (Old - Image of Aniqa) 
    - Cover Image (Old - Image of Aniqa)
    - Doorway (Old - Image of old office space doorway)
    - Kitchen (Old - Image of old office space Kitchen)
    - Lamp and couch (Old - Image of old office space lamp and space)
    - ocean (Old - Backdrop of ocean)
    - Office (Old - Image of old office space)
    - Safe space (Old - Image of old office space safe space)
    - Safe space 2 (Old - Image of old office space Safe space different angle)
    - Single couch (Old - Image of old office space single couch)
    - Window (Old - Image of old office space window)
- App.js file 
    - Ocean backdrop 
    - Import segments 
- Navbar
    - Navigation bar at the top of the webpage
    - Always present
    - Web to phone scalable 
- Write up 
    - Mental health write-up
- Details 
    - Who I am segment
    - What I do segment 
- Physchometric assessment section 
    - Packages segment 
    - Cotains the 3 packages (The first step, Pathfinder and Crossroads)
    - Packages 
        - Contains the write up for the 3 packages
        - In a seperate folder so that updating the packages information is easier
        - Exported into the Physchometric assessment section
- Contact Form
    - Contact form for users to contact Aniqa
    - Form 
        - Actual form
        - Exports into Contact form 
- Footer
    - Footer with random information 
    - Only visible at the end 
    
- Spacer 
    - Spacer between segments 
- Review corousel 
    - unused

-----------------------------------------

September 19 2025
- Going to be updating the entire website
- The layout and colours will be changing 
- New images will be added to the image folder 
    - Images will have a v2 tag 

Updates
- Update to the README file
    - Added information about the layout of the webpage
    - Added updates to the segments that were update
- Image folder
    - Added cover Image v2 (Image of Aniqa on a couch - New backdrop)
- App.js file 
    - Changed the backdrop from Ocean back drop to Image of Aniqa on a couch
- Navbar (No changes so far)
    - Navigation bar at the top of the webpage
    - Always present
    - Web to phone scalable 
- Write up 
    - Added a new write up (About Aniqa Johnson)
    - Changed colour Pallete? 
    - Added a new image (Double couch layout) above mental health write up? 
- Details (No changes so far)
    - Who I am segment
    - What I do segment 
- Physchometric assessment section (No changes so far)
    - Packages segment 
    - Cotains the 3 packages (The first step, Pathfinder and Crossroads)
    - Packages 
        - Contains the write up for the 3 packages
        - In a seperate folder so that updating the packages information is easier
        - Exported into the Physchometric assessment section
- Contact Form (No changes so far)
    - Contact form for users to contact Aniqa
    - Form 
        - Actual form
        - Exports into Contact form 
- Footer (No changes so far)
    - Footer with random information 
    - Only visible at the end 
    
- Spacer (No changes so far)
    - Spacer between segments 
- Review corousel (No changes so far)
    - unused