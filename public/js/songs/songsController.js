(function() {
  angular.module('coverMaestro')
    .controller("SongListController", SongListController)
    .controller("SongListTwoController", SongListTwoController)
    .controller("SongNewController", SongNewController)
    .controller("SongShowController", SongShowController);


    SongListController.$inject = ['SongResource'];
    SongListTwoController.$inject = ['SongResourceTwo'];



    function SongListController(SongResource) {
      var vm = this;
      vm.songs = [];

      SongResource.query().$promise.then(function(songs) {
        vm.songs = songs;
      });
    }

    function SongListTwoController(SongResourceTwo) {
      var vm = this;
      vm.songsTwo = [];

      SongResourceTwo.query().$promise.then(function(songsTwo) {
        vm.songsTwo = songsTwo;
      });
    }


    function SongNewController(SongResource, $state) {
      var vm = this;
      vm.newSong = {};
      vm.addSong = addSong;

      function addSong() {
        SongResource.save(vm.newSong).$promise.then(function(jsonSong) {
          vm.newSong = {};
        });
      }
    }

     function SongShowController(SongResource, $stateParams) {
      var vm = this;
      vm.song = {};

      SongResource.get({id: $stateParams.id}).$promise.then(function(jsonSong) {
          vm.song = jsonSong;
      });
    }
})();
