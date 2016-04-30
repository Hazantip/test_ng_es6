(function () {

    angular
        .module('app')
        .controller('lesson2Ctrl', lesson2Ctrl)
        .controller('lesson2CreditCtrl', lesson2CreditCtrl)
        .controller('lesson2NewsCtrl', lesson2NewsCtrl)
        .controller('lesson2QuizCtrl', lesson2QuizCtrl);

    function lesson2Ctrl($scope) {

        $scope.tasks = [
            { action: 'Buy stock', owner: 'Hazantip', complete: false},
            { action: 'Buy BMW7', owner: 'Hazantip', complete: true},
            { action: 'Sell gold', owner: 'Hazantip', complete: false},
            { action: 'Buy diamonds', owner: 'Hazantip', complete: true},
            { action: 'Visit Ukraine', owner: 'Hazantip', complete: false},
            { action: 'Take money', owner: 'Hazantip', complete: true}
        ];

        $scope.placeholder = 'Angular placeholder';

        $scope.views = [
            {name: '404.html',      url: '../views/404.html'},
            {name: 'about.html',    url: '../views/about.html'},
            {name: 'home.html',     url: '../views/home.html'},
            {name: 'lesson1.html',  url: '../views/lesson1.html'}
        ];

        $scope.showIncludeStatus = function () {
            let msg = $scope.view.name ? 'Done with:' + $scope.view.name : 'Not found.';
            console.log( msg );
        };

        $scope.data = {};
        $scope.dataS = {};

        $scope.showData = function (elem) {
            console.log(elem);
        };
    }

    function lesson2CreditCtrl($scope) {

        $scope.creditCount = function () {
            const BASE_PERIOD   = 12;
            let relativePeriod  = $scope.creditPeriod/BASE_PERIOD;
            let curPercent      = $scope.creditPercent * relativePeriod / 100;
            let totalPay        = parseFloat($scope.creditAmount) + ( $scope.creditAmount * curPercent );

            $scope.countResult = {
                totalPay: totalPay,
                overPay : totalPay - $scope.creditAmount,
                monthPay: totalPay / $scope.creditPeriod,
                overMonthPay: (totalPay - $scope.creditAmount) / $scope.creditPeriod
            }
        }
    }

    function lesson2NewsCtrl($scope) {
        $scope.news = [
            {title: 'Новость 1', content: 'Содержание 1', show: false, path: '../views/articles/1.html'},
            {title: 'Новость 2', content: 'Содержание 2', show: false, path: '../views/articles/2.html'},
            {title: 'Новость 3', content: 'Содержание 3', show: false, path: '../views/articles/3.html'},
            {title: 'Новость 4', content: 'Содержание 4', show: false, path: '../views/articles/4.html'}
        ];

        $scope.itemActive = undefined;

        $scope.showItem = function (e, item) {
            e.isDefaultPrevented();
            console.log(e);
            for (var i = 0, len = $scope.news.length; i < len; i++) {
                // set items show true/false
                $scope.news[i].show = ($scope.news[i] === item);
                // get item that has shown === true
                if ( $scope.news[i].show ) {
                    $scope.itemActive = $scope.news[i];
                }
            }
        }
    }

    function lesson2QuizCtrl($scope, $log) {

        $scope.$log = $log;

        $scope.quizList = [
            {
                question: 'Which currency in USA?',
                answer: ['UAH', 'CAD', 'JPY', 'USD'],
                correct: 'USD',
                done: false
            },
            {
                question: 'Which currency in Ukraine?',
                answer: ['CAD', 'UAH', 'JPY', 'USD'],
                correct: 'UAH',
                done: false
            },
            {
                question: 'Which currency in Japan?',
                answer: ['UAH', 'JPY', 'CAD', 'USD'],
                correct: 'JPY',
                done: false
            },
            {
                question: 'Which currency in Canada?',
                answer: ['JPY', 'UAH', 'CAD', 'USD'],
                correct: 'CAD',
                done: false
            },
            {
                question: 'One mile in meters is:',
                answer: ['1609.344m', '900m', '1300m', '1200m'],
                correct: '1609.344m',
                done: false
            }
        ];

        $scope.results = [];
        $scope.data = {};
        $scope.current = 0;
        $scope.end = false;

        /**
         * @param item     - current object from quizList - {object}
         * @param answer   - current answer               - {string}
         */
        $scope.pushResults = function(item, answer) {
            // push
            $scope.results.push({
                question: item.question,
                answer  : answer,
                correct : answer == item.correct
            });
            // mark as done
            $scope.quizList[$scope.current].done = true;
            // go next
            $scope.current++;
            if ($scope.current >= $scope.quizList.length ) {
                $scope.end = true;
            }
            // unCheck
            //if ($scope.data.value == event.target.value) {
            //    $scope.data.value = false;
            //}

            $log.info(
                'target:',event.target.value, '\t|',
                'results:', $scope.results, '\t|',
                'scope.data: ', $scope.data, '\t|',
                'quizList:', $scope.quizList
            )

        };

        $scope.restart = function() {
            $scope.results = [];
            $scope.data = {};
            $scope.current = 0;
            $scope.end = false;
        }


    }

})();