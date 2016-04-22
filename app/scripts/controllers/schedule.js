'use strict';

/**
 * @ngdoc function
 * @name kenkoApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the kenkoApp
 */
angular.module('kenkoApp')
  .controller('ScheduleCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('.active').removeClass("active");
    $($('.nav-pills').children().get(1)).addClass("active");
  });
