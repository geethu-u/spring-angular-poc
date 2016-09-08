(function() {
    'use strict';

    angular
        .module('CLEApp')
        .service('SearchService', SearchService);

    SearchService.$inject = ['$http', '$rootScope'];

    function SearchService($http, $rootScope) {
        var self = this;

        this.getSearchResults = function(successHandler, errorHandler) {
            $http({
                    method: "GET",
                    url: '/logsearch',
                }).success(successHandler)
                .error(errorHandler);
        }
    }
}());