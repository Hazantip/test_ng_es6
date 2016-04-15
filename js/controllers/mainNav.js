(function() {

    app.controller('mainNavCtrl', function($scope, $window, $state) {
        // unused now
        $scope.goHome = function (elem) {
            console.log($scope, elem);
            $state.go( 'home' );
        };

    });

})();