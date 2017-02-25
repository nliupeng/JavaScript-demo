// startController.js

(function() {
	"use strict";

	// Getting the existing module
    angular.module("app")
        .controller("startController", startController);

    function startController($scope) {
    	$scope.myVar = "this text comes from startController.js"
    }
})();