			function validar(){
				var patt = new RegExp("[a-zA-Z]+");
				var patt2 = new RegExp("NNNN[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ] [BCDFGHJKLMNPORSTVWXYZ]");
				var nombre = document.getElementById('nombre').value;
				var ap1 = document.getElementById('apellido1').value;
				var ap2 = document.getElementById('apellido2').value;
				var matricula = document.getElementById('matricula').value;
				var resultado = patt.test(nombre);
				var resulta2 = patt.test(ap1);
				var resultado3 = patt.test(ap2);
				var resultado4 = patt2.test(matricula);
				if (resultado == false){
					alert('Introduce caracteres alfabéticos en el campo "Nombre"');
				} else if (resulta2 == false) {
					alert('Introduce caracteres alfabéticos en el campo "Apellido 1"')
				} else if (resultado3 == false) {
					alert('Introduce caracteres alfabéticos en el campo "Apellido 2"')
				} else if (resultado4 == false){
					alert('Introduce una matrícula en el campo correspondiente');
				} else if (document.getElementById('exp').value < 340000000000 || document.getElementById('exp').value > 349999999999){
					alert('Introduce un número natural entre 340000000000 y 349999999999 en el campo "Nº Expediente"');
				} else if (document.getElementById('edad').value < 18 || document.getElementById('edad').value > 120){
					alert('Introduce un número natural entre 18 y 120 en el campo "Edad"');
				} else if (document.getElementById('importe').value < 0){
					alert('Introduce un número sin signo en el campo "Importe"');
				} else if (document.getElementById('mesexp').value < 1 || document.getElementById('mesexp').value > 12){
					alert('Introduce un número entre 1 y 12 en el campo "Mes expiración"');
				} else if (document.getElementById('anoexp').value < 2001 || document.getElementById('anoexp').value > 2100){
					alert('Introduce un número entre 2001 y 2100 en el campo "Año expiración"');
				} else {
					alert('Formulario validado');
				}
			}