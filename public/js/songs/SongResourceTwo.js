(function() {
  angular.module('coverMaestro')
    .factory("SongResourceTwo", SongResourceTwo);

  SongResourceTwo.$inject = ['$resource'];

  function SongResourceTwo($resource) {
     return $resource(
        "/api/song/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();
