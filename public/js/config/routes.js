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
      })
      .state('songNew', {
        url: '/songs/new',
        templateUrl: 'js/songs/songNew.html',
        controller: 'SongNewController',
        controllerAs: 'songNewVm'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
