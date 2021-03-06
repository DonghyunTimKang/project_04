(function() {
  angular.module('coverMaestro')
    .factory("ProfileResource", ProfileResource);

  ProfileResource.$inject = ['$resource'];

  function ProfileResource($resource) {
    return $resource(
        "/api/user/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();
