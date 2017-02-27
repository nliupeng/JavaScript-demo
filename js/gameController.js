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
        const rock = 0;
        const paper = 1;
        const scissors = 2;
        
    	$scope.compIcon = "img/unknown.png";
        $scope.options = [ {key: rock, value: "img/rock.png"}, {key: paper, value: "img/paper.png"}, {key: scissors, value: "img/scissors.png"}];
        $scope.resultMessage = "READY?";

        $scope.calculateResult = function(userChoice) {
            var compChoice = generateCompChoice();

            if (userChoice === compChoice) {
                $scope.resultMessage = "It's a draw!";
            } 
            else {
                switch(userChoice) {
                    case rock:
                        if (compChoice === paper) {
                            $scope.resultMessage = "Computer wins!";
                        } 
                        else {
                            $scope.resultMessage = "You win!";
                        }
                        break;
                    case paper:
                        if (compChoice === rock) {
                            $scope.resultMessage = "You win!";
                        } 
                        else {
                            $scope.resultMessage = "Computer wins!";
                        }
                        break;
                    case scissors:
                        if (compChoice === rock) {
                            $scope.resultMessage = "Computer wins!";
                        } 
                        else {
                            $scope.resultMessage = "You win!";
                        }
                        break;
                } // end switch
            } // end else
        }

    	//comp choice function
        var generateCompChoice = function(){
    	    var num = Math.floor(Math.random()*3);
    	    console.log("Computer's choice: " + num);

    	    switch (num) {
                case rock:
                    $scope.compIcon = "img/rock.png";
                    return rock;
                    break;
                case paper:
                    $scope.compIcon = "img/paper.png";
                    return paper;
                    break;
                case scissors:
                    $scope.compIcon = "img/scissors.png";
                    return scissors;
                    break;
            }
        }
        
    }
    
})();