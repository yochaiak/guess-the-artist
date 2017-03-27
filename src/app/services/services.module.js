import ItunesService from "./itunes.service";
import AlbumsService from './albums.service';

export default angular.module('services', [])
    .service('ItunesService', ItunesService)
    .service('AlbumsService', AlbumsService)