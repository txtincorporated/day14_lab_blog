(function(module) {
  var repoView = {};//Sets value of repoView as empty obj. for module export

  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();//Vacates ul element in #about section
    $about.show().siblings().hide();//Shows about and hides sibling els
  };
//Creates li element to display repo
  var render = function(repo) {
    return $('<li>')
      .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
  };
//Defines repoView.index as function that appends remotely fetched repos filtered by whether forked or not
  repoView.index = function() {
    ui();//let $about = section#about

    $('#about ul').append(//add to ul elems. in section#about...
      repos.with('forks_count').map(render)//...attr set as parameter in repo.js:14
    );//Close args. for append();
  };//Close fn. repoView.index
  module.repoView = repoView;//Export var repoView to global context
})(window);//Close IIFE
