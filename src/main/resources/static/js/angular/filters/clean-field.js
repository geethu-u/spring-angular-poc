(function () {
'use strict';

 angular.module('CLEApp')
    .filter('cleanField', function () {
    return function (text) {
        var str = text + '';
        str = str.replace('[', '');
        str = str.replace(']','');
        str = str.replace('"','');
        return str;
    };
});
}());
