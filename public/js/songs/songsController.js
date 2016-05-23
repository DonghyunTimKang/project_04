(function() {
  angular.module('coverMaestro')
    .controller("SongListController", SongListController)
    .controller("SongNewController", SongNewController);


    SongListController.$inject = ['SongResource'];


    function SongListController(SongResource) {
      var vm = this;
      vm.songs = [];

      SongResource.query().$promise.then(function(songs) {
        vm.songs = songs;
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
})();
