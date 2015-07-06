angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Parques) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.parques = Parques.all();
  $scope.remove = function(parque) {
    Parques.remove(parque);
  }
})

.controller('ParqueDetailCtrl', function($scope, $stateParams, Parques) {
  $scope.chat = Parques.get($stateParams.parqueId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
