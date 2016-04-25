(function () {

    angular
        .module('app')
        .controller('aboutCtrl', ['$scope', aboutCtrl]);

    function aboutCtrl($scope) {
        $scope.about = "Lorem ipsum...";
    }

})();