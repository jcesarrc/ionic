angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ParquesCtrl', function($scope, Parques) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.parques = Parques.all();
})

.controller('ParqueDetailCtrl', function($scope, $stateParams, Parques) {
  $scope.parque = Parques.get($stateParams.parqueId);
})

.controller('ReservaCtrl', function($scope, $stateParams, Parques) {
  $scope.parque = Parques.get($stateParams.parqueId);
});
