(function() {
  angular.module('coverMaestro')
    .factory("ProfileResource", ProfileResource);

  ProfileResource.$inject = ['$resource'];

  function ProfileResource($resource) {
    return $resource(
        "/api/song/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();
