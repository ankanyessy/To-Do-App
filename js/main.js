(function(){
	//variables
	var lista=document.getElementById("lista");
	var tareaInput=document.getElementById("tareaInput");
	btnNuevaTarea=document.getElementById("btn.btn-agregar");

	//funciones
	var agregarTarea=function(){};
	var comprobarInput=function(){};
	var eliminarTarea=function(){};
	//eventos

	//agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);


	//comprobar input
	tareaInput.addEventListener("click", comprobarInput);
	for( var=i; i<=lista.children.length-1; i++){
		lista.children[i].addEventListener("click", eliminarTarea);
	}

});

































































/*function AgregarNuevo(){
	var lista = document.getElementById("lista");
	lista.value();

	var elemento =document.createElement("li");
	elemento.appendChild(agregarTarea);

	lista.appendChild(elemento);

	var contenido=document.createElement("a");
	elemento.appendChild(contenido); 
	contenido.setAttribute("href","#");


	//var botonAgregar =document.getElementById("btn-agregar")  //debo enlazar a lo botones los contenidos
	//botonAgregar.addEventListener("Click", function(){
	//})
};

(function nuevaTarea(){
	var nuevaTarea=document.getElementById("agregarTarea");
	var label=document.getElementById("labelButton");

});*/











/*function lista(){
	var lista=document.getElementById("nuevoInput").value;
	var texto=document.createTextNode(lista);
	var nuevaLista=document.createElement("li");
	nuevaLista.setAttribute("checkbox", texto, "span");
	nuevaLista.appendChild(texto);
	document.getElementById("lista").appendChild(nuevaLista);

}*/



































