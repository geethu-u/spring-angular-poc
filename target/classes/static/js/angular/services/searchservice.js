(function() {
    'use strict';

    angular
        .module('CLEApp')
        .service('SearchService', SearchService);

    SearchService.$inject = ['$http', '$rootScope'];

    function SearchService($http, $rootScope) {
        var self = this;

        this.getSearchResults = function(payload, successHandler, errorHandler) {
        var keyArr=Object.keys(payload);
        var query ="";

        angular.forEach(keyArr, function(value, key) {
            if(payload[value]){
                query += value +':' + encodeURIComponent(payload[value].trim()) +',';
            }
        });
        var finalquery = query.substring(0, query.length -1);
        $http({
            method: "GET",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: '/logsearch?query=' + finalquery 
        }).success(successHandler)
        .error(errorHandler);
        }
    }
}());