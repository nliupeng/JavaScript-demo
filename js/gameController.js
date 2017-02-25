// gameController.js

(function () {
    "use strict";

    // Getting the existing module
    angular.module("app")
        .controller("gameController", gameController);

    function gameController($scope) {
        // Variables
        $scope.message = "";
        $scope.showMessage = false;

    	$scope.user2icon = "img/user2icon.png";
        $scope.options = [ {key: "rock", value: "img/rock.png"}, {key: "paper", value: "img/paper.png"}, {key: "scissors", value: "img/scissors.png"}];

    	$scope.selectOption = function(key) {
    		// when user clicks on icon, display computer's result
            switch(key) {
                case "rock":
                    $scope.showMessage = true;
                    $scope.message = "rock clicked!";
                    break;
                case "paper":
                    $scope.showMessage = true;
                    $scope.message = "paper clicked!";
                    break;
                case "scissors":
                    $scope.showMessage = true;
                    $scope.message = "scissors clicked!";
                    break;
                case "default":
            }
    	}

    }

})();