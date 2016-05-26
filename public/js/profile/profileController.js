(function() {
  angular.module('coverMaestro')
    .controller("ProfileShowController", ProfileShowController);

    ProfileShowController.$inject = ['ProfileResource', 'SongResource', 'authService'];

     function ProfileShowController(ProfileResource, SongResource, authService) {
      var vm = this;
      vm.user = {};
      vm.songs = [];
      vm.authService =authService;

      if(authService.isLoggedIn()){
        vm.user=authService.loggedInUser();
        console.log(vm.user);
      }
     // ProfileResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
       //   vm.user = res.data;
      //});
      SongResource.query().$promise.then(function(songs) {
        vm.songs = songs;
        vm.user.songObjects = vm.user.songs.map(function(songId) {
          return vm.songs.find(function(song) {
            return song._id == songId;
          })
        })
      });
    }
})();
