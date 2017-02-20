// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic' , 'ksSwiper'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('CarouselController', function($scope){
  $scope.arr = [1,2,3,4];
  $scope.showNext = true;
  $scope.showPrev = false;
  var count = 0;

  $scope.swiper = {};

  $scope.next = function(){
    $scope.swiper.slideNext(false);
    $scope.showPrev = true;
    console.log(count);
    count++;

    if ((count + 1) >= $scope.arr.length) {
      $scope.showNext = false;
    }
  };

  $scope.prev = function(){
    $scope.swiper.slidePrev(false);
    $scope.showNext = true;
    console.log(count);
    count--;

    if (count <= 0) {
      $scope.showPrev = false;
    }
  };

  $scope.onReadySwiper = function (swiper) {

    swiper.on('slideChangeStart', function (arg) {

      console.log(arg);
      count = arg.activeIndex;

      $scope.$apply(function(){
        $scope.showPrev = !arg.isBeginning;
        $scope.showNext = !arg.isEnd;
      });

    });

  };
})