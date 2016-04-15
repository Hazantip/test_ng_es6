/**
 * Created by Khazan on 13.04.2016.
 */

// TODO: 404 redirect // pure urls non # // push state data implement

var app = angular.module('app', ['ui.router'])
    .config(function ($interpolateProvider, $stateProvider, $urlRouterProvider) {

        /**
         * Interpolation:
         * @link - http://stackoverflow.com/questions/13671701/angularjs-twig-conflict-with-double-curly-braces
         * @link - https://docs.angularjs.org/api/ng/provider/$interpolateProvider
         */
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'input-views': {
                        templateUrl: '../pages/home.html',
                        controller: 'homepageCtrl'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    'input-views': {
                        templateUrl: '../pages/about.html',
                        controller: 'aboutCtrl'
                    },
                    '': {
                        template: '2nd view'
                    }
                }
            })
            .state('date', {
                url: '/date',
                template: '<div class="content">Template D-A-T-E*</div>'
            })
            .state('404', {
                url: '/404',
                template: '<div class="content">Template 4-0-4</div>'
            });
    });