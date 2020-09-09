
/*modulos*/
var Modulo1=require('./Modulo1');
var Modulo2=require('./Modulo2');

/*Suma de materiales porque si*/
Mod2 = Modulo2(500);
	Mod1(5,40,50,Mod2);/*npm start*/
		function Mod1(Empleados,horas,precio,TotalMaterial) {
				console.log("horas de trabajo: "  + horas + "\n"+"precio de las horas:" + precio);

Modulo1(Empleados,horas,precio,TotalMaterial, (error,nul)=>{
		if (error){
			console.log("La Regaste:", error.message);
		}
		/*Imprimiendo*/
		else{
			console.log("Salario De Empleados:" + nul.Total());
				console.log("Materiales:"+ Mod2);
					console.log("TotalProyecto:"+ nul.TotalProyecto());
						console.log("holgura:" + nul.Holgura());
		}
	});

}
