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
      .state('songListTwo', {
        url: '/songs/listTwo',
        templateUrl: "js/songs/songListTwo.html",
        controller: 'SongListTwoController',
        controllerAs: 'songListTwoVm'
      })
      .state('songNew', {
        url: '/songs/new',
        templateUrl: 'js/songs/songNew.html',
        controller: 'SongNewController',
        controllerAs: 'songNewVm'
      })
      .state('songEdit', {
        url: '/songs/edit/:id',
        templateUrl: 'js/songs/songEdit.html',
        controller: 'SongEditController',
        controllerAs: 'songEditVm'
      })
      .state('songShow', {
        url: '/songs/show/:id',
        templateUrl: 'js/songs/songShow.html',
        controller: 'SongShowController',
        controllerAs: 'songShowVm'
      })
    /*  .state("signin", {
        url:          "/signin",
        templateUrl:  "js/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
      });*/
      .state('profileShow', {
        url: '/profile/show/:id',
        templateUrl: 'js/profile/profileShow.html',
        controller: 'ProfileShowController',
        controllerAs: 'ProfileShowVm'
      })
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'welcome.html',
      });

    $urlRouterProvider.otherwise('/');
  }
})();
