(function() {
  angular.module('coverMaestro')
    .factory("SongResourceTwo", SongResourceTwo);

  SongResourceTwo.$inject = ['$resource'];

  function SongResourceTwo($resource) {
    return $resource(
        "/api/song/let it be",
     {
        'update': { method: 'PUT'}
      }
    );
  }
})();
