/**
 * Created by yocha on 3/27/2017.
 */


import template from './album.html';

require('./album.scss');

class AlbumController {
    constructor() {}
}

export default {
    template: template,
    bindings: {
        model: '<'
    },
    controllerAs: 'albumCtrl',
    controller: AlbumController
}