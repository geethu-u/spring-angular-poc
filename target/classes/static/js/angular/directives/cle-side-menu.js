(function () {
  'use strict';

 angular
    .module('CLEApp')
    .directive('cleSideMenu', cleSideMenu);

  function cleSideMenu() {
    return {
      restrict: 'EA',
      templateUrl: '../views/sidemenu.html'
    };
  }
}());
