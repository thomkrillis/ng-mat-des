angular.module('httpFilter', []).filter('secureUrl', function() {
  return function(input) {
    return input.replace('http','https');
  };
});
