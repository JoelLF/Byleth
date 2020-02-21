function LeerCookie() {
	var sCookie=unescape(document.cookie);
	var n=sCookie.indexOf("=");
	var SValorCookie=sCookie.substring(n+1);
	return SValorCookie;
}

var nNumVisita=parseInt(LeerCookie());
if(!nNumVisita){
	nNumVisita=1;
	document.write("<p>Bienvenido a la página de las cookies</p>");
} else{
	nNumVisita++;
	document.write("<p>Esta es su visita "+nNumVisita+".</p>");
} document.cookie="Contador_visitas="+nNumVisita;