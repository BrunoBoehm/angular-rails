angular.module('flapperNews', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });

    $urlRouterProvider.otherwise('home');

  }])
  .factory('posts', [function() {
    var o = {
      posts: []
    };
    return o;
  }])
  .controller('MainCtrl', ['$scope', 'posts', function($scope, posts){

    $scope.posts = posts.posts;
    $scope.addPost = function() {
      // makes sure that their is not an empty post in the title form
      if(!$scope.title || $scope.title === '') { return; };
      // push a new object into the $scope.posts using the data passed into the addPost()
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      // clearing the $scope.title
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };

  }])
  .controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];
    $scope.addComment = function() {
      if($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 00
      });
      $scope.body = "";
    };
  }]);
