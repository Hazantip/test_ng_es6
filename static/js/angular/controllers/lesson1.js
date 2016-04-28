(function() {

    angular
        .module('app')
        .controller('lesson1Ctrl', lesson1Ctrl)
        .controller('calculatorMiniCtrl', calculatorMiniCtrl)
        .controller('calculatorCtrl', calculatorCtrl);


    function lesson1Ctrl($scope) {
        $scope.countries = [
            { name: 'Israel', population: 7000000, times: 1, visited: true },
            { name: 'Ukraine', population: 42000000, times: 1, visited: true },
            { name: 'USA', population: 500000000, times: 1, visited: false },
            { name: 'Spain', population: 32000000, times: 1, visited: true }
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
            $scope.countries.push(
                {
                    name    : $scope.newCountry,
                    times   : $scope.newCountryTimes,
                    visited : false
                }
            );
            $scope.newCountry       = ''; // clean input
            $scope.newCountryTimes  = ''; // clean input
        };

        $scope.deleteCountry = function (itemName) {
            for (let i = 0; i < $scope.countries.length; i++) {
                if ( $scope.countries[i].name === itemName ) {
                    // remove 1 object buy index(i) and return new array
                    $scope.countries.splice( i, 1 );
                }
            }
        };

        $scope.editName = function(country) {
            // TODO: make possible to edit country name on dblclick
        }
    }

    function calculatorMiniCtrl($scope) {
        $scope.calcSum = function() {
            let a = +$scope.numOne;
            let b = +$scope.numTwo;
            if ( !angular.isNumber(a) && !angular.isNumber(b) ) return;
            $scope.result =  a + b || '0';
        };
    }

    function calculatorCtrl($scope) {
        $scope.numbers              = [1,2,3,4,5,6,7,8,9,0,'.'];
        $scope.operators            = ['+','-','/','*'];

        $scope.curNumber            = '';
        $scope.prevNumber           = '';
        $scope.curOperator          = '';
        $scope.result               = '';

        $scope.pushNumber = function() {
            $scope.curNumber    += this.num;
            $scope.result       =  $scope.curNumber;
        };

        $scope.pushOperator = function() {
            // store last value
            $scope.prevNumber = $scope.curNumber;
            // get operator
            $scope.curOperator  = this.operator;
            // reset current value
            $scope.curNumber    = '';
            $scope.result       = '';
        };

        $scope.calc = function () {
            let prev        = parseFloat($scope.prevNumber);
            let cur         = parseFloat($scope.curNumber);
            let operator    = $scope.curOperator;

            if ( isNumber(cur) && isNumber(prev) ) {
                if (operator === '+') {
                    $scope.result = prev + cur;
                    $scope.prevNumber = $scope.result;
                } else if (operator === '-') {
                    $scope.result = prev - cur;
                    $scope.prevNumber = $scope.result;
                } else if (operator === '*') {
                    $scope.result = prev * cur;
                    $scope.prevNumber = $scope.result;
                } else if (operator === '/') {
                    $scope.result = prev / cur;
                    $scope.prevNumber = $scope.result;
                }
            }
        };

        $scope.delete = function() {
            let string          = $scope.result.toString();
            let stringDelIndex  = string.length - 1;
            let newString = string.substring(0, stringDelIndex);
            // save new state
            $scope.curNumber    = newString;
            $scope.result       = newString;
        };

        $scope.clearResult = function() {
            $scope.curNumber        = '';
            $scope.prevNumber       = '';
            $scope.curOperator      = '';
            $scope.result           = '';
        }
    }

})();


function isNumber(data) {
    data = parseFloat(data);
    return ( !isNaN(data) && isFinite(data) && typeof data === 'number');
}

/*
 ﻿
 isNaN      === true :  'a', NaN, undefined, {}, 'false'    - исключаем все эти
 isNaN      === false:  '' , '11', 12, null, true, Infinity - остаються только эти
 isFinite   === false:  Infinity                            - исключаем Infinity
 typeof === 'number' будет среди оставшихся только у чисел, а так еще у NaN, Infinity
 То есть по сути надо исключить NaN, Infinity и сравнить тип, тогда 100% число.
 */