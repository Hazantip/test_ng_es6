(function () {

    angular
        .module('app')
        .controller('redirectCtrl', redirectCtrl);

    function redirectCtrl($scope, $interval) {
        $scope.title = '404!';
        $scope.now = new Date();

        $interval(function () {
            $scope.now = new Date();
        }, 1000);
    }

})();