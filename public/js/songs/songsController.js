(function() {
  angular.module('coverMaestro')
    .controller("SongListController", SongListController)
    .controller("SongListTwoController", SongListTwoController)
    .controller("SongNewController", SongNewController)
    .controller("SongShowController", SongShowController)
    .controller("SongEditController", SongEditController);


    SongListController.$inject = ['SongResource', 'authService', '$http'];
    SongListTwoController.$inject = ['SongResourceTwo', '$http'];
    SongEditController.$inject = ['SongResource', '$stateParams', '$state'];
    SongShowController.$inject = ['SongResource', 'authService', '$stateParams'];



    function SongListController(SongResource, authService, $http) {
      var vm = this;
      vm.songs = [];
      vm.addSongtoUser = addSongtoUser;
      vm.destroy = destroy;
      vm.authService =authService;

      SongResource.query().$promise.then(function(songs) {
        vm.songs = songs;
        console.log("Hella"+songs)
      });

      function destroy(songToDelete) {
        SongResource.delete({id: songToDelete._id}).$promise.then(function (response) {
          console.log(response.message);
          vm.songs = vm.songs.filter(function(song) {
            return song != songToDelete;
          });
        });
      }

      function addSongtoUser(song){
        var id = song._id;
        $http
          .put(`/api/users/me/songs/${id}`, song)
          .then(function(res){
            console.log(res.data);
          },
          function(err){
            console.log(err)
          })
            }
    }



    function SongListTwoController(SongResourceTwo, $http) {
      var vm = this;
      vm.apiSongs = [];
      /*vm.songsTwo = [];

      SongResourceTwo.query().$promise.then(function(songsTwo) {
        vm.songsTwo = songsTwo;
        console.log(vm.songsTwo);
      });*/
      vm.songsThirdParty;
      vm.songsTwo=function(song){
        console.log(song+"HERRO");
        $http.put('http://localhost:3000/api/songThirdparty', {"query":song}).success(function(data){
          vm.apiSongs=data.objects;
          console.log('Third Party Call');
          console.log(vm.apiSongs);
        })
      }

    }


    function SongNewController(SongResource, $state) {
      var vm = this;
      vm.newSong = {};
      vm.addSong = addSong;

      function addSong() {
        SongResource.save(vm.newSong).$promise.then(function(jsonSong) {
          vm.newSong = {};
          $state.go('songShow', {id: jsonSong._id});
        });
      }
    }

     function SongShowController(SongResource, authService, $stateParams) {
      var vm = this;
      vm.song = {};
      vm.authService =authService;

      SongResource.get({id: $stateParams.id}).$promise.then(function(jsonSong) {
          vm.song = jsonSong;
          console.log("song ID"+$stateParams.id)
      });
    }

    function SongEditController(SongResource, $stateParams, $state) {
      var vm = this;
      vm.song = {};
      vm.editSong = editSong;

      SongResource.get({id: $stateParams.id}).$promise.then(function(jsonSong) {
          vm.song = jsonSong;
      });

      function editSong() {
        SongResource.update({id: vm.song._id}, vm.song).$promise.then(function(updatedSong) {
          vm.song = updatedSong;
          //$state.go('showShow', {id: updatedShow._id});
        });
      }
    }


})();
