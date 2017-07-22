function validarform()
{
	var verificar = true;
	var expregnombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
	var expregemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2-4}$/;
	
	var formulario = document.getElementById("iniciarsesion_frm");
	var usuario = document.getElementById("usuario");
	var contraseña = document.getElementById("contraseña");
	
	if (!usuario.value)
	{
		alert("El campo nombre es requerido");
		nombre.focus();
		verifica=false;
	}	
	
	
	else if(!contraseña.value)
	{
		alert("El campo contraseña es requerido");
		contraseña.focus();
		verifica=false;
	}
	
	
	alert ("Validando");
}
function limpiarform()
{
	alert("Limpiando");
	document.getElementById("inicarsesion_frm").reset();
}
window.onload = function()
{
	var botonenviar,botonlimpiar ;
	botonlimpiar = document.getElementById("limpiar");
	botonlimpiar.onclick = limpiarform;
	
	botonenviar = document.iniciarsesion.inciar_btn;
	botonenviar.onclick = botonenviar;
}