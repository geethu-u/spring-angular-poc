(function() {

  angular
    .module("CLEApp")
    .controller("SearchCtrl", SearchCtrl);

  SearchCtrl.$inject = ["$scope", "$http","$rootScope","$location" ,"SearchService"];

  function SearchCtrl($scope, $http, $rootScope, $location, SearchService) {
    
      $rootScope.pagetitle = "Search";
      $scope.page = "landing";
      
      var success = function(result) {
      $rootScope.pagetitle = "Search Results";
      $scope.page = "results";
      $scope.logresults = result.response.docs;
      };

      $scope.getResults = function(){
        SearchService.getSearchResults(success, null);
      };
      
  //     $scope.totalItems = $scope.logresults.length;
  //     $scope.currentPage = 1;
  //     $scope.numPerPage = 3;
    
  //   $scope.paginate = function(value) {
  //     var begin, end, index;
  //     begin = ($scope.currentPage - 1) * $scope.numPerPage;
  //     end = begin + $scope.numPerPage;
  //     index = $scope.logresults.indexOf(value);
  //     return (begin <= index && index < end);
  //   };
   }
}
)();