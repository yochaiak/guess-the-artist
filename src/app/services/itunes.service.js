export default class ItunesService {
    constructor($http, $httpParamSerializer, $sce) {
        this.apiUrl = 'https://itunes.apple.com/search'
        this.$http = $http;
        this.$sce = $sce;
        this.$httpParamSerializer = $httpParamSerializer;
    }

    search(params) {
        let queryString = this.$httpParamSerializer(params);
        let secureUrl = this.$sce.trustAsResourceUrl(this.apiUrl + '?' + queryString);

        return this.$http.jsonp(secureUrl);
    }
}

ItunesService.$inject = ['$http', '$httpParamSerializer', '$sce'];