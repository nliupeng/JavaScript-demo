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

<<<<<<< HEAD
=======
        // user2 is comp
>>>>>>> 3ded33762198027fe1631a3d77dabd3baae6485c
    	$scope.user2icon = "img/user2icon.png";
        $scope.options = [ {key: "rock", value: "img/rock.png"}, {key: "paper", value: "img/paper.png"}, {key: "scissors", value: "img/scissors.png"}];

    	$scope.selectOption = function(key) {
    		// when user clicks on icon, display computer's result
            switch(key) {
                case "rock":
                    $scope.showMessage = true;
                    $scope.message = "rock clicked!";
<<<<<<< HEAD
=======
                    $scope.generateCompChoice()
                    $scope.playAudio(key, 0);
>>>>>>> 3ded33762198027fe1631a3d77dabd3baae6485c
                    break;
                case "paper":
                    $scope.showMessage = true;
                    $scope.message = "paper clicked!";
<<<<<<< HEAD
                    break;
                case "scissors":
                    $scope.showMessage = true;
                    $scope.message = "scissors clicked!";
=======
                    $scope.generateCompChoice()
                    $scope.playAudio(key, 1);
                    break;
                case "scissors":
                    $scope.showMessage = true;
                    $scope.generateCompChoice();
                    $scope.message = "scissors clicked!";
                    $scope.playAudio(key, 2);
>>>>>>> 3ded33762198027fe1631a3d77dabd3baae6485c
                    break;
                case "default":
            }
    	}

    	//comp choice function
        $scope.generateCompChoice = function(){
    	    // random number from 1-3.
    	    var num = Math.floor(Math.random()*3 + 1);
    	    console.log(num);
    	    switch (num) {
                case 1:
                    $scope.user2icon = "img/rock.png";
                    break;
                case 2:
                    $scope.user2icon = "img/paper.png";
                    break;
                case 3:
                    $scope.user2icon = "img/scissors.png";
                    break
            }
        }

        // audio
        $scope.playAudio = function(key, i){
            var audio = new Audio('audio/sfx' +$scope.options[i].key + '.mp3');
            audio.play();
        }

    }
})();