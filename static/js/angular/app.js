/**
 * Created by Khazan on 13.04.2016.
 */

// TODO: 404 redirect // pure urls non # // push state data implement

angular
    .module('app', [
        'ui.router',
        'ngAnimate'
    ])
    .config(appConfig);

function appConfig($interpolateProvider, $stateProvider, $urlRouterProvider) {

    /**
     * Interpolation:
     * @link - http://stackoverflow.com/questions/13671701/angularjs-twig-conflict-with-double-curly-braces
     * @link - https://docs.angularjs.org/api/ng/provider/$interpolateProvider
     */
        // $interpolateProvider.startSymbol('{[{').endSymbol('}]}');

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'viewA': {
                    templateUrl: 'views/home.html',
                    controller: 'homepageCtrl'
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                'viewA': {
                    templateUrl: 'views/about.html',
                    controller: 'aboutCtrl'
                },
                '': {
                    template: '<div class="container">' +
                    '<div>View 2</div> ' +
                    '<div>app.js views.template</div>' +
                    '</div>'
                }
            }
        })
        .state('404', {
            url: '/404',
            views: {
                'viewA': {
                    templateUrl: 'views/404.html',
                    controller: 'redirectCtrl'
                }
            }
        })
        .state('lesson1', {
            url: '/lesson1',
            views: {
                'viewA': {
                    templateUrl: 'views/lesson1.html',
                    controller: 'lesson1Ctrl'
                }
            }
        })
        .state('lesson2', {
            url: '/lesson2',
            views: {
                'viewA': {
                    templateUrl: 'views/lesson2.html',
                    controller: function ($rootScope) {
                        $rootScope.page = 'lesson2'
                    }
                }
            }

        })
        .state('lesson3', {
            url: '/lesson3',
            views: {
                'viewA': {
                    templateUrl: 'views/lesson3.html',
                    controller: function ($rootScope) {
                        $rootScope.page = 'lesson3'
                    }
                }
            }
        })
}