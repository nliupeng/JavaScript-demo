// gameController.js

(function () {
    "use strict";

    // Getting the existing module
    angular.module("app")
        .controller("gameController", gameController);

    function gameController($scope) {
        // Variables
        const rock = 0;
        const paper = 1;
        const scissors = 2;
        
        $scope.compIcon = "img/unknown.png";
        $scope.options = [ {key: rock, value: "img/rock.png"}, {key: paper, value: "img/paper.png"}, {key: scissors, value: "img/scissors.png"}];
        $scope.resultMessage = "READY?";
        $scope.userScore = 0;
        $scope.compScore = 0;

        /* Calculate winner of round */
        $scope.calculateResult = function(userChoice) {
            $scope.playAudio(userChoice);

            var compChoice = generateCompChoice();

            if (userChoice === compChoice) {
                $scope.resultMessage = "It's a draw!";
                $scope.userScore++;
                $scope.compScore++;
            } 
            else {
                switch(userChoice) {
                    case rock:
                        if (compChoice === paper) {
                            $scope.resultMessage = "Computer wins!";
                            $scope.compScore++;
                        } 
                        else {
                            $scope.resultMessage = "You win!";
                            $scope.userScore++;
                        }
                        break;
                    case paper:
                        if (compChoice === rock) {
                            $scope.resultMessage = "You win!";
                            $scope.userScore++;
                        } 
                        else {
                            $scope.resultMessage = "Computer wins!";
                            $scope.compScore++;
                        }
                        break;
                    case scissors:
                        if (compChoice === rock) {
                            $scope.resultMessage = "Computer wins!";
                            $scope.compScore++;
                        } 
                        else {
                            $scope.resultMessage = "You win!";
                            $scope.userScore++;
                        }
                        break;
                } // end switch
            } // end else
        }

        /* Comp choice function */
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
        
        /* Reset game */
        $scope.reset = function() {
            $scope.resultMessage = "READY?";
            $scope.userScore = 0;
            $scope.compScore = 0;
        }

        /* Audio function */
        $scope.playAudio = function(i) {
            var audio = new Audio('audio/sfx' + i + '.mp3');
            audio.play();
        }

    } // end gameController()
    
})();