(function() {

  angular
    .module("CLEApp")
    .controller("SearchCtrl", SearchCtrl);

  SearchCtrl.$inject = ["$scope", "$http","$rootScope","$location"];

  function SearchCtrl($scope, $http, $rootScope, $location) {
    
    $rootScope.pagetitle = "Search";
    $scope.page = "landing";

    $scope.getResults = function(){
   	    $rootScope.pagetitle = "Search Results";
    	$scope.page = "results";
    };
 }
})();