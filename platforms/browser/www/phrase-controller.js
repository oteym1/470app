var phraseController = angular.module('phraseController',[]);

phraseController.controller('MainController',['word','$scope',function(word, $scope)
{
  var ctrl = this;
  ctrl.phrase = null;
  ctrl.phrases = [];
  {

  word.success(function(data)
  {
    ctrl.phrases = data;
  })
  .error(function(err)
  {
    ctrl.phrases = "⚰️";
  });
};
}]);
