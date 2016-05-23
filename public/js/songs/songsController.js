(function() {
  angular.module('coverMaestro')
    .controller("SongListController", SongListController);


    SongListController.$inject = ['SongResource'];


    function SongListController(SongResource) {
      var vm = this;
      vm.songs = [];

      SongResource.query().$promise.then(function(songs) {
        vm.songs = songs;
      });
    }
})();
