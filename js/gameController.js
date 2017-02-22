// gameController.js

(function () {
    "use strict";

    // Getting the existing module
    angular.module("app")
        .controller("gameController", gameController);

    function gameController($scope) {
    	$scope.myMsg = "myMsgText";


    	$scope.myFunction = function() {
    		$scope.myMsg = "myMsgText changed!";
    	}

    }

})();