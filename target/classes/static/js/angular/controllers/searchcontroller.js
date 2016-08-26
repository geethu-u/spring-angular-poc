(function() {

  angular
    .module("CLEApp")
    .controller("SearchCtrl", SearchCtrl);

  SearchCtrl.$inject = ["$scope", "$http","$rootScope"];

  function SearchCtrl($scope, $http,$rootScope) {
    
    $rootScope.pagetitle = "Search";

 }
})();