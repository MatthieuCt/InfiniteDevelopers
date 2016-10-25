'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl as home'
  });
}])

.controller('HomeCtrl', [function($scope, $http) {
    // $scope.top = 'toto';
    var vm = this;
    vm.datas = {
        "top": {
            "date": "26 juillet 2016",
            "title": "expo photo lyon",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta congue magna vitae tempus. Morbi elementum, nibh et ultricies facilisis, nulla ipsum rhoncus mi, vulputate rutrum augue lorem eu sem.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta congue magna vitae tempus. Morbi elementum, nibh et ultricies facilisis, nulla ipsum rhoncus mi, vulputate rutrum augue lorem eu sem. Vivamus at pharetra metus. Aliquam congue justo posuere, auctor ex sit amet, tincidunt elit. Ut non lorem quis sapien tristique hendrerit. Aenean fermentum diam lacus, at imperdiet dolor scelerisque in. Maecenas finibus eros non magna fringilla, sit amet vulputate mauris pharetra"
        },
        "news": [
            {
                "image": "http://placehold.it/560x420",
                "date": "22/07/2016",
                "type": "Actualités",
                "title": "Lancement du prix photo tremplin de l'année",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta congue magna vitae tempus."
            },
            {
                "image": "http://placehold.it/560x420",
                "date": "29/07/2016",
                "type": "Actualités",
                "title": "Lee Jeffries s'illustre encore avec photos en noir et blanc !",
                "description": "Lorem ipsum dolor sit amet, consectetur ..."
            }
        ],
        "jeffries": [
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            },
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            },
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            },
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            },
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            },
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            },
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            },
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            },
            {
                "image": "http://placehold.it/200x230",
                "title": "Lorem Titre",
                "description": "Description"
            }
        ],
        "docs": [
            {
                "title": "Téléchargez le dossier de candidature",
                "link": "#"
            },
            {
                "title": "Téléchargez le dossier de résiliation",
                "link": "#"
            }
        ]
    }



}]);