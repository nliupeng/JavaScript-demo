// app.js

(function () {
    "use strict";

    // Creating the module
    var app = angular.module("app", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: "views/game.html",
            controller: "gameController"
        })
        .when('/start', {
            templateUrl: "views/start.html"          
        })
        .otherwise({ redirectTo: '/' });
    });
})();


