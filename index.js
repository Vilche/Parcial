
/*modulos*/
var Modulo1=require('./Modulo1');
var Modulo2=require('./Modulo2');

/*Suma de materiales porque si*/
PrecioMat = Modulo2(500);
	Mod1(5,40,50,PrecioMat);/*npm start*/
		function Mod1(empleados,horas,precio,totalMaterial) {
				console.log("horas de trabajo: "  + horas + "\n"+"precio de las horas:" + precio);

Modulo1(empleados,horas,precio,totalMaterial, (error,nul)=>{
		if (error){
			console.log("La Regaste:", error.message);
		}
		/*Imprimiendo*/
		else{
			console.log("Salario De Empleados:" + nul.Total());
				console.log("Costo de Materiales:"+ PrecioMat);
					console.log("TotalProyecto:"+ nul.TotalProyecto());
						console.log("holgura:" + nul.Holgura());
		}
	});

}
