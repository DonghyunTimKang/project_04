(function() {
  angular.module('coverMaestro')
    .controller("SongListController", SongListController)


    SongListController.$inject = ['SongResource'];


    function SongListController(Songesource) {
      var vm = this;
      vm.shows = [];

      SongResource.query().$promise.then(function(songs) {
        vm.songs = songs;
      });
    }
})();
