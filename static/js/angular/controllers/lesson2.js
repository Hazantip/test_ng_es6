(function () {

    angular
        .module('app')
        .controller('lesson2Ctrl', lesson2Ctrl);

    function lesson2Ctrl($scope) {

        $scope.tasks = [
            { action: 'Buy stock', complete: false},
            { action: 'Buy BMW7', complete: true},
            { action: 'Sell gold', complete: false},
            { action: 'Buy diamonds', complete: true},
            { action: 'Visit Ukraine', complete: false},
            { action: 'Take money', complete: true}
        ];


    }

})();