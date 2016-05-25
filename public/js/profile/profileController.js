(function() {
  angular.module('coverMaestro')
    .controller("ProfileShowController", ProfileShowController);

    ProfileShowController.$inject = ['ProfileResource', 'authService'];

     function ProfileShowController(ProfileResource, authService) {
      var vm = this;

      if(authService.isLoggedIn()){
        vm.user=authService.loggedInUser();
        console.log(vm.user);
      }
     // ProfileResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
       //   vm.user = res.data;
      //});
    }


})();
