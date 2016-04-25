(function() {

    angular
        .module('app')
        .controller('lesson1Ctrl', lesson1Ctrl);

    function lesson1Ctrl($scope) {
        $scope.countries = [
            { name: 'Israel', population: 7000000, visited: true },
            { name: 'Ukraine', population: 42000000, visited: true },
            { name: 'USA', population: 500000000, visited: false },
            { name: 'Spain', population: 32000000, visited: true }
        ];

        $scope.remain = function () {
            let count = 0;
            angular.forEach($scope.countries, function (item) {
                count += item.visited; // add 0 or 1
            });
            return count;
        };

        $scope.addCountry = function () {
            if (!$scope.newCountry) return;
            $scope.countries.push( { name: $scope.newCountry, visited: false } );
            $scope.newCountry = ''; // clean input
        };
    }

})();