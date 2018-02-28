app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider){
    var home = {
        main_route: {
            name: 'home',
                url: '/',
                templateUrl: 'src/partials/home.html',
                controller: ['$scope', function ($scope) {

                $scope.page_title = 'Anasayfa';
            }]
        },
        children: []
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(home.main_route);
}]);
