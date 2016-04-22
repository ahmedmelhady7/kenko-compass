'use strict';

/**
 * @ngdoc function
 * @name kenkoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the kenkoApp
 */
angular.module('kenkoApp')
  .controller('ProfileCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('.active').removeClass("active");
    $($('.nav-pills').children().get(2)).addClass("active");
  });
