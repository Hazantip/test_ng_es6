angular.module('app')
    .controller('lesson3Ctrl', lesson3Ctrl)
    .controller('lesson3StateCtrl', lesson3StateCtrl)
    .controller('lesson3ThemeCtrl', lesson3ThemeCtrl)
    .controller('lesson3RegUserCtrl', lesson3RegUserCtrl)
    .directive('tap', function () {
        return function (scope, elem, attrs) {
            elem.on('click', function () {
                scope.$apply(attrs['tap']);
            })
        }
    });


function lesson3Ctrl($scope) {
    $scope.tasks = [
        {action: "Buy flowers", complete: false},
        {action: "Go to gym", complete: false},
        {action: "Buy snickers", complete: true},
        {action: "Buy notebook", complete: false},
        {action: "Call friends", complete: true}
    ];

    $scope.buttonNames = ['bg-info', 'bg-danger', 'bg-success'];
    $scope.settings = {
        head: 'bg-success',
        body: 'bg-info'
    };

    $scope.message = 'Click me!';

    /**
     * @param e - event {angular $event}
     */
    $scope.handleEvent = function (e) {
        console.log(e);
    };

    $scope.matchPattern = 'Hazantip'; // ВОТ ОН ЛОГИН!
    //$scope.matchPattern = 'new RegExp("^[a-z]")';

    $scope.addTask = function (newTask) {
        if (
            angular.isDefined(newTask) &&
            angular.isDefined(newTask.action) &&
            angular.isDefined(newTask.priority)
        ) {
            $scope.tasks.push({
                action: newTask.action + newTask.priority,
                complete: false
            });
        }
    };

    // функция чтобы не делать для каждой формы проверку
    // а провериять после того как ввели везде где установлен вызов
    $scope.errorMessage = 'Ready';
    $scope.getError = function (error) {
        if (angular.isDefined(error)) {
            // будет создан только тогда когда будет допущена ошибка
            if (error.required) {
                return 'Please, enter a value.'
            } else if (error.email) {
                return 'Please enter a valid email address'
            }
        } else {
            // newTask создается через html, тут только чистка если нет error
            $scope.newTask = {};
        }
    };
}

function lesson3StateCtrl($scope) {
    $scope.dataValue = false;
}

function lesson3ThemeCtrl($scope) {
    $scope.themes = {
        list: ['default', 'black', 'white', 'color'],
        current: 'default',
        preview: ''
    };
    /**
     * @param preview - hovered theme - {string}
     */
    $scope.previewThemeStart = function (preview) {
        // in html i will show `PREVIEW || CURRENT`
        $scope.themes.preview = preview;
    };
    $scope.previewThemeEnd = function () {
        $scope.themes.preview = ''; // if it false, class = current
    }
}

function lesson3RegUserCtrl($scope) {
    $scope.user = {name: '', email: '', phone: '', password: ''};

    $scope.users = [];

    $scope.pattern = {
        user: '^[A-z0-9 ]+$',
        phone: '^[0-9 ]+$'
    };

    $scope.getError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required) {
                return 'Values is required.'
            } else if (error.email) {
                return 'Email not valid'
            } else if (error.minlength) {
                return 'Minimum 3 symbols'
            } else {
                console.log(error);
                return 'Not valid!'
            }
        } else {
            return 'Ok!'
        }
    };

    $scope.addUser = function (form) {
        if (form.$valid) {
            // add if all ok!
            $scope.users.push($scope.user);
            // and then reset
            form.$setPristine();
            form.$setUntouched();
            $scope.user = {};
        }
    };

}