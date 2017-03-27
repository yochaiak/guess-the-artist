/**
 * Created by yocha on 3/27/2017.
 */
/**
 * Created by yocha on 3/27/2017.
 */


import template from './question.html';

require("./question.scss");

class QuestionController {
    constructor($scope) {
        this.userAnswer = null;
    }

    onAnswerSubmit() {
        this.onSubmit({
            isAnswerCorrect: this.userAnswer && this.data.answer.toLowerCase() == this.userAnswer.toLowerCase()
        });

        this.userAnswer = null;
    }
}

export default {
    template: template,
    bindings: {
        data: '<',
        onSubmit: '&'
    },
    controllerAs: 'questionCtrl',
    controller: QuestionController
}