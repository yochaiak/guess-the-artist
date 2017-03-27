/**
 * Created by yocha on 3/27/2017.
 */


export default class AlbumsService {
    constructor(ItunesService, $q) {
        this.ItunesService = ItunesService;
        this.$q = $q;
    }

    getByArtistName(artistName) {
        let deferred = this.$q.defer();

        this.ItunesService.search({
            term: artistName,
            limit: 15,
            entity: 'album'
        }).then((result) => deferred.resolve(result.data.results), (result) => console.log(result))

        return deferred.promise;
    }
}

AlbumsService.$inject = ['ItunesService', '$q'];