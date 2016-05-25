(function() {
  angular.module('coverMaestro')
    .controller("SongListController", SongListController)
    .controller("SongListTwoController", SongListTwoController)
    .controller("SongNewController", SongNewController)
    .controller("SongShowController", SongShowController);


    SongListController.$inject = ['SongResource'];
    SongListTwoController.$inject = ['SongResourceTwo', '$http'];



    function SongListController(SongResource) {
      var vm = this;
      vm.songs = [];

      SongResource.query().$promise.then(function(songs) {
        vm.songs = songs;
      });
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
