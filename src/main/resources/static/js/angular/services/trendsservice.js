(function() {
    'use strict';

    angular
        .module('CLEApp')
        .service('TrendsService', TrendsService);

    TrendsService.$inject = ['$http', '$rootScope'];

    function TrendsService($http, $rootScope) {
        var self = this;

        this.getTrends = function(successHandler, errorHandler) {
            $http({
                    method: "GET",
                    url: '/salestrend',
                }).success(successHandler)
                .error(errorHandler);
        }
    }
}());