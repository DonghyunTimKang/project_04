(function() {
  angular.module('coverMaestro')
    .factory("SongResource", SongResource);

  SongResource.$inject = ['$resource'];

  function SongResource($resource) {
    return $resource(
      "/api/song",
       {
        'update': { method: 'PUT'}
      }
    );
  }
})();
