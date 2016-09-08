(function() {

  angular
    .module("CLEApp")
    .controller("SearchCtrl", SearchCtrl);

  SearchCtrl.$inject = ["$scope", "$http","$rootScope","$location" ,"SearchService"];

  function SearchCtrl($scope, $http, $rootScope, $location, SearchService) {
    
      $rootScope.pagetitle = "Search";
      $scope.page = "landing";
      
      $scope.logresults = [
        {"select" : true, "appid": "APP_1_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"}, 
        {"select" : false, "appid": "APP_1_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"},
        {"select" : true, "appid": "APP_1_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"},
        {"select" : false, "appid": "HAPP_1_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"},
        {"select" : false, "appid": "APP_4_5_6_7_8", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"}, 
        {"select" : true, "appid": "CAPP_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"}, 
        {"select" : false, "appid": "DAPP_1_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"}, 
        {"select" : false, "appid": "APP_1_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"}, 
        {"select" : false, "appid": "SAPP_1_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"}, 
        {"select" : false, "appid": "APP_1_2_3_4_5", "component": "APP_1_2_3_COMPONENT","service":"GET_REWARDS_12345","status":"Received","hostname":"1265567_89244",
        "businessid": "00000232342","businessid2": "0000343434","transactionId" : "TRANS_ensdsdf_werwerwr"}
      ];

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