var app = angular.module('StarterApp', ['ngMaterial'])
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('indigo')
      .warnPalette('deep-purple');
  })
  .controller('AppCtrl', function($scope, $http){
    $scope.results = '';
    $scope.query = '';
    $scope.subreddit = '';
    $scope.author = '';
    $scope.nsfw = '';

    $scope.search = function() {
    var url = 'http://www.reddit.com/search.json?q=' + $scope.query;
    if ($scope.subreddit) {
      url += '+subreddit%3A' + $scope.subreddit;
    }
    if ($scope.author) {
      url += '+author%3A' + $scope.author;
    }
    if ($scope.nsfw) {
      url += '+nsfw%3A' + $scope.nsfw;
    }
    $http.get(url)
      .success(function(data) {
        $scope.results = data.data.children;
      })
      .error(function() {
        alert('Could not get search data.');
      });
    };
  });
