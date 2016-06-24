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
    ui();

    $('#about ul').append(
      repos.with('forks_count').map(render)//Supplies attr set as parameter in repo.js:14
    );
  };
//IIFE export
  module.repoView = repoView;
})(window);
