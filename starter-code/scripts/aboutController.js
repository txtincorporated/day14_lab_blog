(function(module) {//IIFE
  var aboutController = {};//Object stored for export from private scope

  aboutController.index = function() {//Name fn. aboutController.index
    repos.requestRepos(repoView.index);//Code block: call global fn. repos.requestRepos from repo.js:6 and pass repoView.index as arg. for callback parameter
  };//Close function

  module.aboutController = aboutController;//Export var aboutController from private scope
})(window);//Close IIFE
