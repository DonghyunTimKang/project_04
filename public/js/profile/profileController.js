(function() {
  angular.module('coverMaestro')
    .controller("ProfileShowController", ProfileShowController);

    ProfileShowController.$inject = ['ProfileResource', 'SongResource', 'authService', '$stateParams'];

     function ProfileShowController(ProfileResource, SongResource, authService, $stateParams) {
      var vm = this;
      vm.user = {};
      vm.songs = [];

      ProfileResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
          vm.user = jsonUser;
          console.log("user:", vm.user);
      });
      // SongResource.query().$promise.then(function(songs) {
      //   vm.songs = songs;
      //   vm.user.songObjects = vm.user.songs.map(function(songId) {
      //     return vm.songs.find(function(song) {
      //       return song._id == songId;
      //     })
      //   })
      // });
    }
})();
