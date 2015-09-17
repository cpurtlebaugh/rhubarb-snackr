 angular
    .module('app', ['ui.router'])
    .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: index.html,
        controller: 'SnackController',
        controllerAs: 'vm',
      })
      .state('snack', {
        url: '/snack',
        templateUrl: index.html,
        controller: 'SnackController',
        controllerAs: 'vm',
      })


   $urlRouterProvider.otherwise('/');
  }

