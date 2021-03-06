// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
  //Place the tabs bar at the bottom of the screen

  $ionicConfigProvider.tabs.position('bottom');

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'ParquesCtrl'
      }
    }
  })

  .state('tab.parques', {
      url: '/parques',
      views: {
        'tab-parques': {
          templateUrl: 'templates/tab-parques.html',
          controller: 'ParquesCtrl'
        }
      }
    })
    .state('tab.parque-detail', {
      url: '/parque/:parqueId',
      views: {
        'tab-parques': {
          templateUrl: 'templates/parque-detail.html',
          controller: 'ParqueDetailCtrl'
        }
      }
    })

  .state('tab.contacto', {
    url: '/contacto',
    views: {
      'tab-contacto': {
        templateUrl: 'templates/tab-contacto.html'
      }
    }
  })

  .state('tab.confirmacion', {
    url: '/confirmacion',
    views: {
      'tab-parques': {
        templateUrl: 'templates/confirmacion.html'
      }
    }
  })

  .state('tab.valor', {
    url: '/valor',
    views: {
      'tab-parques': {
        templateUrl: 'templates/valor.html'
      }
    }
  })

  .state('tab.concesion', {
    url: '/concesion/:parqueId',
    views: {
      'tab-parques': {
        templateUrl: 'templates/concesion.html',
        controller: 'ParqueDetailCtrl'
      }
    }
  })


  .state('tab.reserva', {
    url: '/reserva/:parqueId',
    views: {
      'tab-parques': {
        templateUrl: 'templates/tab-reserva.html',
        controller: 'ReservaCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
