/*Desarrollo de modulo1 para errores osiosi*/
module.exports =(empleados,horas,precio,totalMaterial,callback)=>{
	Modulo1=0;
		if (horas <=0  ||  precio<=0){
				callback(new Error("No uses numeros negativos o ceros Crack"),null
);
	}
	else {
			callback(null, {
					Total:()=> (Modulo1 +=((horas*empleados)*precio)),
						TotalProyecto:()=> (Proyect = (totalMaterial+Modulo1)),
								Holgura:()=> (Proyect*0.08),
	  });
	}
}
