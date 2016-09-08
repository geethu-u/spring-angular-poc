(function () {
  'use strict';

 angular
    .module('CLEApp')
    .directive('cleHeader', cleHeader);

  function cleHeader() {
    return {
      restrict: 'EA',
      templateUrl: '../views/header.html'
    };
  }
}());
