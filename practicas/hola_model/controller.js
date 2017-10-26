angular.module("MyFirstApp",[])
	.controller("FirstController",function($scope){
		$scope.nombre="Juan Camilo"
		$scope.comentarios=[
		{
			comentario:"Buen Tutorial",
			username:"Juan Camilo"
		},
		{
			comentario:"Malisimo Tutorial",
			username:"otro usuario"
		}
		];
		//de esta forma se crea una funcion
		$scope.agregarComentario=function(){
		//con push se adicionan elementos a un arreglo	
			$scope.comentarios.push($scope.nuevoComentario);
		//se borra la caja de texto en el html	
			$scope.nuevoComentario=[];
		}
});


//Two way data binding y ng model
/*
se actulaiza el nombre en ambos lados
al  mismo tiempo

ng-repeat es como un foreach muestra todo 
dentro de un arreglo

ng-click al darle clik ejecuta el comando de angular

ng-model se le asigna un tipo de id


*/