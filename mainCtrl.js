var app = angular.module('directiveWorkshop', []);

app.controller('mainCtrl', function($scope, mainService){
$scope.getSongData = function () {
        return mainService.getData($scope.query).then(function (data) {
           console.log(data);
           return $scope.data = data.data.results;
        });
    };
  

});