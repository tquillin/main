
// console.log(process.env.NAME);

var app = angular.module('ScoresApp', ['MainControllerModule', 'ScoresApiFactory']);

var dotenv = require('dotenv');
dotenv.load();
