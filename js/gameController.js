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

        
        // user2 is comp
    	$scope.user2icon = "img/user2icon.png";
        $scope.options = [ {key: "rock", value: "img/rock.png"}, {key: "paper", value: "img/paper.png"}, {key: "scissors", value: "img/scissors.png"}];

    	$scope.selectOption = function(key) {
    		// when user clicks on icon, display computer's result
            switch(key) {
                case "rock":
                    $scope.showMessage = true;
                    $scope.message = "rock clicked!";
                    $scope.generateCompChoice()
                    $scope.playAudio(key, 0);
                    break;
                case "paper":
                    $scope.showMessage = true;
                    $scope.message = "paper clicked!";
                    $scope.generateCompChoice()
                    $scope.playAudio(key, 1);

                    break;
                case "scissors":
                    $scope.showMessage = true;
                    $scope.generateCompChoice();
                    $scope.message = "scissors clicked!";
                    $scope.playAudio(key, 2);

                    break;
                case "default":
            }
    	}

    	//comp choice function
        $scope.generateCompChoice = function(){
    	    // random number from 1-3.
    	    var num = Math.floor(Math.random()*3 + 1);
    	    switch (num) {
                case 1:
                    // same as $scope.user2icon = "img/rock.png";

                    $scope.user2icon = $scope.options[0].value;
                    break;
                case 2:
                    $scope.user2icon = $scope.options[1].value;
                    break;
                case 3:
                    $scope.user2icon = $scope.options[2].value;
                    break
            }
        }
        //////////////// End function ////////////////

        //audio confirmation
        $scope.playAudio = function(key, i){
            var audio = new Audio('audio/sfx' +$scope.options[i].key + '.mp3');
            audio.play();
        }
        
    }
    


})();