(function() {
  angular.module('coverMaestro')
    .controller("ProfileShowController", ProfileShowController);

    ProfileShowController.$inject = ['ProfileResource'];

     function ProfileShowController(ProfileResource, $stateParams) {
      var vm = this;
      vm.user = {};

      ProfileResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
          vm.user = res.data;
      });
    }


})();
