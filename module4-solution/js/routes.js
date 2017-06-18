(function () {
  "use strict";

  angular.
    module("MenuApp").
    config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "js/templates/home.html"
      })
      .state("categories", {
        url: "/categories",
        templateUrl: "js/components/categories/templates/menu_categories.html",
        controller: "MenuCategoriesController as menuCategories",
        resolve: {
          categories: ["MenuDataService", function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state("items", {
        url: "/categories/{categoryShortName}/items",
        templateUrl: "js/components/items/templates/category_items.html",
        controller: "CategoryItemsController as categoryItems",
        resolve: {
          items: ["MenuDataService", "$stateParams", function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  }
})();
