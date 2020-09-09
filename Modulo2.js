/*Proceso del modulo2*/

/*Saco el precio total de los materiales junto con los impuestos agregados y sus gastos de gastosEnvio
porque? porque yes*/
module.exports =(precioMateriales)=>{


		var impuestos = 20;
	  var gastosEnvio = 30;
	  var precioTotal = ( precioMateriales * impuestos ) + gastosEnvio;


	return precioTotal;
}
