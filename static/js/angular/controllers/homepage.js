(function() {

    app.controller('homepageCtrl', function ($scope, $rootScope) {
        $scope.homepage = "Главная";
        $rootScope.userInfo = {
            user: 'V.Khazan',
            age: 25,
            admin: false
        };
        $scope.userState = $scope.userInfo.admin ? 'admin' : 'unregistered';
        //$state.current.url += $scope.userState;
        //console.log($state);
        console.log($scope.text);
    });

})();
