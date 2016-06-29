(function(module) {//IIFE
  var repos = {};//Object for storing stringified GitHub repos retrieved via AJAX call

  repos.all = []; //Array for storing parsed out repo objects

  repos.requestRepos = function(callback) {//global function to send AJAX req
    //How does $.get() differ from $.getJSON() and $.ajax()?--$.get is standard-issue jQuery sending a url that requests information other than HTML from the server; $.getJSON is meant only for JSON strings which it parses on the fly and outputs as JS data objects, and is not spec. to DBs; $.ajax query obj. would comprise the longhand version of this with considerably more bells and whistles in the syntax.
    //What happens due to the two chained $.done() functions? -- See next comment
    $.get('/github/user/repos' + '?per_page=100' + '&sort=updated')//Composes URL query to GitHub API requesting repos on which to run anon. fn. that populates repos.all w/ data from response and then running a callback; called by aboutController with a callback that filters for repos forked by other GH users
    .done(function(data, message, xhr) { repos.all = data; })//prev comment;
    .done(callback);//prev comment; How many .done() callbacks run? 1, supplied by fn. that calls requestRepos; none will run if none supplied or if initial query fails or hangs; only one callback is called here, passed as an arg. to fulfill param at line 6 and actually called at line 11, upon execution of which it will run as per, e.g., aboutController.js:5, which supplies repoView.index, which in turn would hence run here in that application of this code.  There is no "both", since this fn. allows only one callback.  Again the callback passed at line 6 will be called by line 11.
  };


  repos.with = function(attr) {//Global fn. to ret. all repos w/ attr supplied as arg.; called at repoView.js:20 w/ attr given as repo forks-count, i.e., looks for repos which have been forked
    return repos.all.filter(function(repo) { return repo[attr]; });//prev. comment re. forked:  [attr] is what allows it to do that. Re. question 3-and-a-few-bullets: repos.all is defined above; see prev. comment place at that location as per assignment instructions.
    //Filter filters; see prev. comments; repo param specifies current iteration of this looplike function; see foregoing for answer to final bullet
  };

  module.repos = repos;//Export var repos to global scope
})(window);//Close IIFE
