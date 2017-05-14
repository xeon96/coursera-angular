(function() {
  'use strict';
  angular.
    module('LunchCheck', []).
    controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.check = function() {
      if (!$scope.mealsStr) {
        $scope.message = "Please enter data first";
        $scope.messageType = "err";
      } else {
        var mealsCount = getMeals($scope.mealsStr);

        if (mealsCount > 3) {
          $scope.message = "Too much!";
          $scope.messageType = "err";
        } else if (mealsCount > 0) {
          $scope.message = "Enjoy!";
          $scope.messageType = "success";
        } else {
          $scope.message = "Empty meals are not counted!";
          $scope.messageType = "err";
        }
      }
    };

    $scope.getMsgClass = function() {
      return 'alert alert-' + $scope.messageType;
    };
  }

  function getMeals(mealsStr) {
    var meals = mealsStr.split(',').filter(function(meal) {
      return !!meal.trim();
    });

    return meals.length;
  }
})();
