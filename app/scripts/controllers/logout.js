'use strict';

/**
 * @ngdoc function
 * @name kenkoApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the kenkoApp
 */
angular.module('kenkoApp')
  .controller('LogoutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('.active').removeClass("active");
    $($('.nav-pills').children().get(3)).addClass("active");
  });
