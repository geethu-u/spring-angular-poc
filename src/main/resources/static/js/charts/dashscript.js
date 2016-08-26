var dashApp = angular.module('dashApp',[]);

dashApp.controller('dashController', function($scope,$http){

    //$scope.name = "Mr.XYZabcd";
    $http.get("/salestrend")
    .then(function(response) {
        var rxData = response.data;
        var months =[];
        var amounts =[];
        for(i=0; i<rxData.length; i++)
        {
           months[i] = rxData[i].month;
           amounts[i] = rxData[i].amount;
        }
        $scope.name = months;
        $scope.myWelcome = amounts;
        //$scope.name = response.data;
    });
});