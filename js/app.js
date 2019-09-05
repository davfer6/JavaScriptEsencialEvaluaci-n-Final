var estudiantes = [
	{
		"codigo" : "1000290155",
		"nombre" : "Sandra Milena Carrascal",
		"nota" : 4.2
	},{
		"codigo" : "1000397285",
		"nombre" : "Valeryn Velez",
		"nota": 4.5
	},{
		"codigo" : "1000400094",
		"nombre" : "Andrés Figueroa",
		"nota" : 5
	},{
		"codigo" : "1000549576",
		"nombre" : "Jeyson Vaca",
		"nota" : 4.7
	},{
		"codigo" : "1000570600",
		"nombre" : "Daniela Vergara",
		"nota" : 4.6
	},{
		"codigo" : "1000661637",
		"nombre" : "Paulina Guarin",
		"nota" : 4.3
	},{
		"codigo" : "1000920657",
		"nombre" : "Deisy Mejía",
		"nota" : 4.1
	},{
		"codigo" : "1001138065",
		"nombre" : "Santiago Sepulveda",
		"nota" : 5
	},{
		"codigo" : "1001995931",
		"nombre" : "Sebastian Pulgarin",
		"nota" : 3.8
	},{
		"codigo" : "1004052789",
		"nombre" : "Wainer Mosquera",
		"nota" : 2
}];


function mostrarEstudiantes(json) {
	var aprendices="-----Los aprendices son:--------<br>";
	
	for (var i = 0; i < json.length; i++) {
		aprendices+="Código: "+json[i].codigo+"      Nombre: "+json[i].nombre+"   Nota: "+json[i].nota+"<br>";
	}

	document.getElementById('estudiantes').innerHTML=aprendices;
}

function calculoPromedio(json) {
	var promedio=0;
	
	for (var i = 0; i < json.length; i++) {
		promedio+=json[i].nota;
	}
	promedio=promedio/json.length;

	document.getElementById('notaPromedio').innerHTML="La nota promedio es: "+promedio;
}

function calculoNotaMayor(json) {
	var mayor=[0,0,0,0,0,0,0,0,0,0];
	
	for (var i = 0; i < json.length; i++) {
		mayor[i]+=json[i].nota;
	};

	document.getElementById('mayorNota').innerHTML="La nota mayor es: "+Math.max(...mayor);
}


function calculoNotaMenor(json) {
	var menor=[0,0,0,0,0,0,0,0,0,0];
	
	for (var i = 0; i < json.length; i++) {
		menor[i]+=json[i].nota;
	};

	document.getElementById('menorNota').innerHTML="La nota mayor es: "+Math.min(...menor);
}

