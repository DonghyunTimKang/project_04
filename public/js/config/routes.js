(function() {
  angular.module('coverMaestro')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('songList', {
        url: '/songs/list',
        templateUrl: "js/songs/songList.html",
        controller: 'SongListController',
        controllerAs: 'songListVm'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
