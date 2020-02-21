var productos = new Array();
var nuevaVentana;
var prod1, prod2 ,prod3;
productos[0] = new Producto("1", "Pocion", "100");
productos[1] = new Producto("2", "Sello", "1000");
productos[2] = new Producto("3", "Staff", "5000");

function Producto(pCod, pNombre, pPrecio){
	this.Cod = pCod;
	this.Nombre = pNombre;
	this.Precio = pPrecio;
	this.toString = Producto_toString;
}

function Producto_toString(){
	return (this.Cod+", "+this.Nombre+", "+this.Precio);
}

function ventanaAbierta() {
	if (!nuevaVentana) {
		return false
	} else if (nuevaVentana.closed) {
		return false
	} else {
		return true
	}
}

function mostrarPedido(){
	if (!ventanaAbierta()) {
		nuevaVentana = window.open("minipedido.htm", "", "width=350, height=200")
	} else {
		nuevaVentana.focus()
	} if (document.getElementById('prod1').value === ""){
		prod1 = 0;
	} else {
		prod1 = document.getElementById('prod1').value;
	}if (document.getElementById('prod2').value === ""){
		prod2 = 0;
	} else {
		prod2 = document.getElementById('prod2').value;
	} if (document.getElementById('prod3').value === ""){
		prod3 = 0;
	} else {
		prod3 = document.getElementById('prod3').value;
	}
	document.cookie=prod1 + "+" + prod2 + "+" + prod3 + ";path=/";
 }

