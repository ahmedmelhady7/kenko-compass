'use strict';

/**
 * @ngdoc function
 * @name kenkoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kenkoApp
 */
angular.module('kenkoApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('.active').removeClass("active");
    $($('.nav-pills').children().get(0)).addClass("active");

  });
