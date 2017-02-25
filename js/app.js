// app.js

(function () {
    "use strict";

    // Creating the module
    var app = angular.module("app", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: "views/start.html",
            controller: "startController"          
        })
        .when('/game', {
            templateUrl: "views/game.html",
            controller: "gameController"
        })        
        .otherwise({ redirectTo: '/' });
    });
})();


