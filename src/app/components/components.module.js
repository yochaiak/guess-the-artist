/**
 * Created by yocha on 3/27/2017.
 */

import MainComponent from './main/main.component';
import AlbumComponent from './albums/album.component';
import QuestionComponent from './question/question.component';

export default angular.module('components', [])
        .component('main', MainComponent)
        .component('album', AlbumComponent)
        .component('question', QuestionComponent)