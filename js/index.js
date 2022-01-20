// Situar el foco en el campo de ingreso
	txt1.focus();
  	var abc = [..."abcdefghijklmnñopqrstuvwxyz "]; //Listado de caracteres validos

   // Verifica si todas las letras son validas
   function validar(sigue) {
   	var tmp = [...txt1.value];
   	var errores = 0;
   	for(i = 0; i < tmp.length; i++) {
   		sino = abc.includes(tmp[i]) ;
   		if (!sino) {
   			errores++
   		}
   	}
   	if (errores > 0) {
   		msgerr();
   		return;
   	}
  		enclave(sigue) ;
   }
   // Mensaje de error si hay caracteres invalidos
   function msgerr() {
  		alert("El texto tiene caracteres invalidos, *** Verifique ***");
   }
   // Encripta o desencripta los mensajes
   function enclave(bandera) {
   	tmp1 = txt1.value ;
   	if (bandera == 0) {
   		tmp1 = tmp1.replaceAll("e", "enter", "gi") ;
   		tmp1 = tmp1.replaceAll("i", "imes", "gi") ;
   		tmp1 = tmp1.replaceAll("a", "ai", "gi") ;
   		tmp1 = tmp1.replaceAll("o", "ober", "gi") ;
   		tmp1 = tmp1.replaceAll("u", "ufat", "gi") ;
   	} else {
   		tmp1 = tmp1.replaceAll("enter", "e", "gi") ;
   		tmp1 = tmp1.replaceAll("imes", "i", "gi") ;
   		tmp1 = tmp1.replaceAll("ai", "a", "gi") ;
   		tmp1 = tmp1.replaceAll("ober", "o", "gi") ;
   		tmp1 = tmp1.replaceAll("ufat", "u", "gi") ;
   	}
   	txt2.value = tmp1 ;
   }
   // Copia el resultado encriptado al portapapeles
	function copiar() {
		let dos = document.getElementById("txt2");
		dos.select();
		dos.setSelectionRange(0, 99999);
		document.execCommand("copy");
		dos.value = "";
		txt1.value = "";
		txt1.focus();
	}