(function () {

    angular
        .module('app')
        .controller('homepageCtrl', homepageCtrl);

    function homepageCtrl($scope, $rootScope) {
        $scope.homepage = "Home page";
        $rootScope.userInfo = {
            user: 'V.Khazan',
            age: 25,
            admin: false
        };
        $scope.userState = $scope.userInfo.admin ? 'admin' : 'unregistered';
        //$state.current.url += $scope.userState;
        //console.log($state);
    }

})();
