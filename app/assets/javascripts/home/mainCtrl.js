angular.module('flapperNews')
  .controller('MainCtrl', ['$scope', 'posts', function($scope, posts){

    $scope.posts = posts.posts;

    $scope.addPost = function() {
      // makes sure that their is not an empty post in the title form
      if(!$scope.title || $scope.title === '') { return; };
      // push a new object into the $scope.posts using the data passed into the addPost()
      posts.create({
        title: $scope.title,
        link: $scope.link
      });
      // clearing the $scope.title
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      posts.upvote(post);
    };

  }]);
