(function() {
  "use strict";

  angular
    .module('coverMaestro')
    .config(appRoutes);

  appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider

      .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
      });


    $urlRouterProvider.otherwise("/");
  }

})();
