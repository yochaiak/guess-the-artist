import angular from 'angular';
import services from './services/services.module.js';
import components from './components/components.module';
import constants from './constants/constants.module';

require("../public/css/reset.css");

const dependencies = [
    services.name,
    components.name,
    constants.name
];

angular.module('GuessTheArtist',  dependencies);