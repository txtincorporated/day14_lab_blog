# [Development Mechanics Pt. 5](https://bitbucket.org/nkeene/plpwork/src/a431e0da52474c7cff76fe41a8bd3613f88d379b/DevMech05oldLabs/?at=DevMech05oldLabs)
## Nathan Keene Personalized Learning Plan
####  
This page lists Code 301 Lab assignments covered by Al's comments in the PLP along with notes on the status of issues raised by graders for each.  Where work has been done to address grader issues the relevant GitHub commit is given.

### Labs with issues
- [x] **[Lab 02 Solo: Portfolio](https://canvas.instructure.com/courses/1029497/assignments/4713923)**    
*Grader comments:*  
- [x]This has the same issue as the one I slack messaged you about--I'm looking at the last commit on that pull request. Please send a commit where the issue is fixed. [NB: issue was that poster images of projects took up entire viewport in desktop view; this was fixed by limiting max-width to 768px for the poster image slide show assembly.]

- [x] No repos show up when I navigate to /about The index page still has only a background image, with only one clickable link that takes the user to your LinkedIn page.  

    *Resolution:*   
    * These issues were both resolved during completion and deployment of the portfolio to [https://nathan-p-keene.herokuapp.com](https://nathan-p-keene.herokuapp.com).  
    * Code is available for review at [https://github.com/txtincorporated/Nathan_P_Keene](https://github.com/txtincorporated/Nathan_P_Keene).  
    * For resolution to first issue see PR #66 at [https://github.com/txtincorporated/Nathan_P_Keene/pull/66](https://github.com/txtincorporated/Nathan_P_Keene/pull/66).
    * For resolution to second pair of issues  [see app](https://nathan-p-keene.herokuapp.com).

#   
- [x] **[Lab 03 Solo: Portfolio](https://canvas.instructure.com/courses/1029497/assignments/4713906)**    
*Grader comments:*  
- [x]The "About" section is always visible. - There's no obvious navbar, and no link to the index or /about pages. - Links to github.io projects are all 404. As the app stands, there's not enough working to be graded.  

    *Resolution:*   
    * This issue was resolved during completion and deployment of the portfolio to [https://nathan-p-keene.herokuapp.com](https://nathan-p-keene.herokuapp.com).  
    * Code is available for review at [https://github.com/txtincorporated/Nathan_P_Keene](https://github.com/txtincorporated/Nathan_P_Keene).
    * Note that the routing structure of this app does not conform strictly to the lab, which attempts to force GitHub repo objects into a blog format; instead, the portfolio replaces index with an about/contact section that is the primary landing page and the places portfolio content into a projects section which is invoked by clicking on the large poster images above the content field.  To navigate back to the landing content one clicks on the dropdown nameplate at the top of the window; link/nav functionality is indicated with color and animation effects.

#   
- [x] **[Lab 04 Solo: Portfolio](https://canvas.instructure.com/courses/1029497/assignments/4713907)**    
*Grader comments:*  
- [x]You added Handlebars but I did not see multiple CSS files or any custom fonts or heading sizes. I am taking off 4 points for not meeting the style requirements and 2 for late submission.  

    *Resolution:*   
    * This issue was partially resolved during completion and deployment of the portfolio to [https://nathan-p-keene.herokuapp.com](https://nathan-p-keene.herokuapp.com).  
    * Code is available for review at [https://github.com/txtincorporated/Nathan_P_Keene](https://github.com/txtincorporated/Nathan_P_Keene).
    - [ ] **Unresolved:** still need separate style sheets

#   
- [x] **[Lab 05 Solo: Portfolio](https://canvas.instructure.com/courses/1029497/assignments/4713934)**    
*Grader comments:*  
- [x]Please resubmit to include: URL of the GitHub Issues page of your partner's repo where you created a bunch of feedback. URL of the most recent commit you made that is associated with closing out one of the issues your partner submitted. Use it commit messages that look like "fix #1" to automatically close an Issue. How long did this lab take? What did you learn in this process?  

- [x]In pull #11, the /about route works - it pulls up github repo info using a local githubToken.js, but the index page doesn't work.
In pull #12, there is an index page that shows a background image and a working link to LinkedIn, but the /about route doesn't work.
No change in score - the app should be more functional.  

    *Resolution:*   
    * First issue was resolved (unsuccessfully at first) in [PR #11](https://github.com/txtincorporated/Nathan_P_Keene/pull/11) and  [PR #12](https://github.com/txtincorporated/Nathan_P_Keene/pull/12).  
    * Second issue was resolved in completing and deploying the app.  
    * Code is available for review at [https://github.com/txtincorporated/Nathan_P_Keene](https://github.com/txtincorporated/Nathan_P_Keene).
    * Note that the routing structure of this app does not conform strictly to the lab, as noted above, and that the local GitHub token is no longer used, of course.  Token is now proxied on Heroku as assigned in a later lab, although the repos are all public anyway.


#   
- [x] **[Lab 06 Solo: Portfolio](https://canvas.instructure.com/courses/1029497/assignments/4713908)**    
*Grader comments:*  
- [x]+ The AJAX call works
- [x]- 0.9 points deducted for late submission
- [x]- Projects should be sorted by date, newest on top, but the app shows the oldest project on top.
- [x]- Projects show up regardless of the URL.
- [x]- The app doesn't contain a nav bar, and has no links to /about or the index page.  

    *Resolution:*   
    * All issues resolved in completing and deploying the app.  
    * Code is available for review at [https://github.com/txtincorporated/Nathan_P_Keene](https://github.com/txtincorporated/Nathan_P_Keene).
    * Note that the static module showing project poster images and an animated nameplate performs all nav functions; also note that it reconfigures dynamically depending on display orientation in devices. See previous note regarding routing.

#   
- [x] **[Lab 07: Portfolio + FP](https://canvas.instructure.com/courses/1029497/assignments/4713909)** *(unsubmitted)*    
*Assignment requirements:*  
- [x]Eliminate all `for` loops.
- [x]Use `.map()` where you are transforming one collection into another.
- [x]Enclose the contents of each script file in an IIFE that exports any interface methods.
- [x]Use templates to avoid repetition of HTML structure. Use `.map()` to convert collections of data into collections of DOM nodes.
- [x]Think of a useful way to use `.reduce()`. Maybe you want to put some "fun facts and stats" in your footer, or on a separate page, like funStats.html?  

    *Resolution:*   
    * No `for` loops ever used.  
    * `.map` used to populate project template with content from repos and to populate slide show template with poster images from same.
    * All functions contained within IIFEs from the start.
    * Templates used for top nav images and for projects.
    * `.reduce()` used to calculate total combined size of all my repos on GitHub as shown at top of projects page (see `projView.js:27`)
    * Code is available for review at [https://github.com/txtincorporated/Nathan_P_Keene](https://github.com/txtincorporated/Nathan_P_Keene).

#   
- [x] **[Lab 12: Portfolio + MVC + REST API](https://canvas.instructure.com/courses/1029497/assignments/4713912)**    
*Grader issues:*  
- [x]A nav bar still non-existent
- [x]The nav "area" includes to link to an image that is part of the app
- [x]Mostly not RWD  

    *Resolution:*   
    * As per notes above, all issues addressed during completion and deployment to [https://nathan-p-keene.herokuapp.com](https://nathan-p-keene.herokuapp.com):  nav area now fully functional (click image area for "Projects" page and dropdown name plate for "About/Contact" page); images rotate as intended and link only to Projects page; design fully responsive in both portrait and landscape up to display width of 768px (iPad format), then fixed width from there.
    * Code is available for review at [https://github.com/txtincorporated/Nathan_P_Keene](https://github.com/txtincorporated/Nathan_P_Keene).

#   
- [x] **[Lab 13: Portfolio + HOFs + deployment](https://canvas.instructure.com/courses/1029497/assignments/4713913)** *(unsubmitted)*    
*Assignment requirements:*  
- [x]Make sure your code passes ESLint.
- [x]DO NOT create your Heroku app with a default name. If you do accidentally, rename it. Or blow it away, and start again.
- [x]Link to your live site in your portfolio README on GitHub.
- [x] An HOF that accepts one parameter ("HOF param") and generates a closure that uses the HOF param. The closure function itself should accept one parameter ("inner param") and manipulate the DOM in a way that depends on the inner param. Your app should use the HOF to generate two closures that are not identical, and should call each of the two closures.  
- [x] An HOF that accepts a function as a parameter, and calls that function inside it. Write a function that manipulates the DOM, and pass that function to the HOF.

    *Resolution:*   
    * For second-to-last issue see `projects.js:17`, adapted from blog lab code for this portfolio.
    * For last issue see `aboutView.js:122`
    * As per notes above, these and all other issues addressed during completion and deployment to [https://nathan-p-keene.herokuapp.com](https://nathan-p-keene.herokuapp.com).
    * Code is available for review at [https://github.com/txtincorporated/Nathan_P_Keene](https://github.com/txtincorporated/Nathan_P_Keene).

#   
- [x] **[Lab 14: Analyze the blog app](https://canvas.instructure.com/courses/1029497/assignments/4774673)**    
*Grader issues:*  
- [x]I'm not seeing answers to Question 2 part 1 [in `articleController.js`]
- [x]repo.js isn't analyzed
- [x]aboutController.js isn't analyzed.

    *Resolution:*
    * All issues resolved in [Pull request #2](https://github.com/txtincorporated/day14_lab_blog/pull/2), merged to master on 6/29
    * Code is available for review at [https://github.com/txtincorporated/day14_lab_blog](https://github.com/txtincorporated/day14_lab_blog)

#   
- [x] **[Lab 14: Blog code comments](https://canvas.instructure.com/courses/1029497/assignments/4713932)**     
*Grader issues:*  
- [x]There are some COMMENT questions left unanswered here. [NB: These were all located in `articleView.js`]

    *Resolution:*  
    * Resolved as of 09/17/2016 [pull request #3](https://github.com/txtincorporated/day14_lab_blog/pull/3): Answers added to un-addressed `COMMENT` lines, merged to master same day
    * Code is available for review at [https://github.com/txtincorporated/day14_lab_blog/pull/3](https://github.com/txtincorporated/day14_lab_blog/pull/3)
