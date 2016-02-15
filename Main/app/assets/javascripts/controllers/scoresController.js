var ctrl = angular.module("MainControllerModule",[]);

ctrl.controller('ScoresController', ['$scope', 'ScoresApi',
  function($scope, ScoresApi){

    $scope.heading = "That smells...";

    $scope.scores = [];
    $scope.page = 0;
    $scope.limit = 10;

    $scope.loadMore = function(){
      ScoresApi.getAll($scope.page, $scope.limit).then(function(response){
        $scope.scores = $scope.scores.concat(response.data.scores);
        $scope.page += 1;
      });
    };

    $scope.sendSearch = function(){
      $scope.loading = true;
      ScoresApi.search( $scope.searchTerm ).then(function(response){
        $scope.scores = response.data.scores;
        $scope.loading = false;
      });
    };

  }
]);
