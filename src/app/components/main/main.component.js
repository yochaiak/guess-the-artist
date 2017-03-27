import template from "./main.html";
import _ from 'lodash';

require('./main.scss');

class MainController {
    constructor(AlbumsService, ARTISTS) {
        this.ARTISTS = ARTISTS;
        this.AlbumsService = AlbumsService;

        this.start();

    }

    start() {
        this.randomArtist = _.sampleSize(this.ARTISTS, 1)[0];
        console.log(this.randomArtist);

        this.AlbumsService.getByArtistName(this.randomArtist).then((albums) => {
            this.albums = albums;
            this.randomAlbums = _.sampleSize(this.albums, 3);
            this.album = this.randomAlbums.pop();
        });

        this.userAttempts = 0;
        this.roundScore = 5;
        this.totalScore = this.totalScore || 0;
        this.round = this.round || 1;

        this.currentQuestion = {
            text: 'Who\'s the artist? (enter full name)',
            answer: this.randomArtist,
        }
    }

    nextRound(isAnswerCorrect) {
        if (this.round   === 5) {
            this.gameover = true;
            return;
        }

        ++this.userAttempts;

        if (isAnswerCorrect) {
            this.totalScore += this.roundScore;
            this.round++;

            this.start();
        } else {
            if (this.userAttempts === 3) {
                this.start();
            } else if (this.userAttempts < 3) {
                this.album = this.randomAlbums.pop();
                this.roundScore -= 2;
            }
        }
    }
}

export default {
    template: template,
    bindings: {},
    controllerAs: "mainCtrl",
    controller: MainController
}