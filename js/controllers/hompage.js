(function() {

    app.controller('homepageCtrl', function ($scope, $rootScope) {
        $scope.homepage = "Главная";
        $rootScope.userInfo = {
            user: 'Viacheslav Khazan',
            age: 25,
            admin: false
        };
        $scope.userState = $scope.userInfo.admin ? 'admin' : 'unregistered';
        //$state.current.url += $scope.userState;
        //console.log($state);
    });

})();