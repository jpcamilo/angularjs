var app =angular.module("MyFirstApp",[]);

//controlador (propiedades)
app.controller("FirstController",function($scope){
//$scope es el que enlace el modelo del controlador con la vista	
	$scope.nombre="Juan Camilo"

});

/*
El framwork esta modularizado, varios modulos,
por esa razon es que hay que importar tantos modulos

al momento de crear un controlador "var app =angular.module"
el primer parametro que le pasamos es el nombre del controlador que vamos a crear
"MyFirstApp" y el segundo son los modulos que le vamos a adicionar
las dependencias.
tambien se puede utilizar de la siguiente forma  

angular.module("MyFirstApp",[]);
.controller("FirstController",function($scope){
	$scope.nombre="Juan Camilo"
});

para añadirmle mas modules se hace de la suiguiente manera

angular.module("MyFirstApp",[]);
.controller("FirstController",function($scope){
	$scope.nombre="Juan Camilo"
}).controller("SirstController",function($scope){
	
});

