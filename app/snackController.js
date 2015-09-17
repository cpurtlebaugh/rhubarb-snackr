(function(){
'use strict';

angular
  .module('snackApp')
  .controller('SnackController',SnackController)

SnackController.$inject = [];

function SnackController(){
  var vm = this;

  vm.allSnacks = [

    {
    username: "bakinbob",
    image: "",
    description: "Need a ",
    location: "",
    info: {delivery: "yes", barter: "no" }
    rating: 3,
    comments: {}
   },
    {
    username: "cookiecutter",
    image: "",
    description: "",
    location: "",
    info: {delivery: "no", barter: "no"},
    rating: 4,
    comments: {}
    },
     {
    username: "doughboy",
    image: "",
    description: "",
    location: "",
    info: {delivery: "no", barter: "yes" },
    rating: 5,
    comments: {}
    },
     {
    username: "nomtastic",
    image: "",
    description: "",
    location: "",
    info: {delivery: "yes", barter: "yes" },
    rating:
    },
     {
    username: "browiebites",
    image: "",
    description: "",
    location: "",
    info: {delivery: "no", barter: "no" },
    rating: 4,
    comments: {}
    }
     {
    username: "cakepop",
    image: "",
    description: "",
    location: "",
    info: {delivery: "yes", barter: "no" },
    rating: 3,
    comments: {}
    }
  ]



})();
