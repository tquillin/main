require('dotenv').load();

console.log(process.env.NAME);

var app = angular.module('ScoresApp', ['MainControllerModule', 'ScoresApiFactory']);
