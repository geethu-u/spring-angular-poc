var dashApp = angular.module('dashApp',[]);

dashApp.controller('dashController', function($scope,$http){

    //$scope.name = "Mr.XYZABCD";
    $http.get("/salestrend")
    .then(function(response) {
        $scope.name = response.data;
    });
});