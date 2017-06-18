(function () {
  "use strict";

  angular.module("MenuApp").
    component("items", {
      templateUrl: "js/components/items/templates/items.html",
      bindings: {
        items: "<"
      }
    });

})();
