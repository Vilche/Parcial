/*Desarrollo de modulo1 para errores osiosi*/
module.exports =(Empleados,horas,precio,TotalMaterial,callback)=>{
	Modulo1=0;
		if (horas <=0  ||  precio<=0){
				callback(new Error("No uses numeros negativos o ceros Crack"),null
);
	}
	else {
			callback(null, {
					Total:()=> (Modulo1 +=((horas*Empleados)*precio)),
						TotalProyecto:()=> (TotalMaterial+Modulo1),
								Holgura:()=> (Modulo1*0.08),
	  });
	}
}
