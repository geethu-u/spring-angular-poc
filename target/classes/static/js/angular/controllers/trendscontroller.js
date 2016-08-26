(function() {

  angular
    .module("CLEApp")
    .controller("TrendsCtrl", TrendsCtrl);

  TrendsCtrl.$inject = ["$scope", "$http","$rootScope","TrendsService"];

  function TrendsCtrl($scope, $http,$rootScope, TrendsService) {
    
    $rootScope.pagetitle = "Trends";
    var months = [];
    var amounts = [];
    $scope.showChart = false;

    $scope.getTrendsData = function() {
      var success = function(response) {
        $scope.showChart = true;
        var rxData = response;
        for (i = 0; i < rxData.length; i++) {
          months[i] = rxData[i].month;
          amounts[i] = rxData[i].amount;
        }
        var month = data2["month"];
        var amount = data2["amount"];
      }

      TrendsService.getTrends(success, null);

      var data = {
        "xData": months,
        "yData": [{
          "name": "Monthly sales",
          "data": amounts
        }]
      }

      $scope.lineChartYData = data.yData
      $scope.lineChartXData = data.xData
    };
  };
})();
