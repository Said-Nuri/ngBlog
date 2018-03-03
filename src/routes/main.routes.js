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

    var search = {
        main_route: {
            name: 'search',
            url: '/search/?',
            templateUrl: 'src/partials/search.html',
            controller: ['$scope', function ($scope) {


            }]
        }
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(home.main_route);
    $stateProvider.state(search.main_route);
}]);
