var ventana = require('ventana');
var url = 'http://www14.df.gob.mx/virtual/pushnot/smartcdmx_Ip/index.php/Welcome/get_tweets/ca_omar_so';
var xhr = Ti.Network.createHTTPClient({
	onload : function(e) {
		console.log(this.responseText);
		var datos = JSON.parse(this.responseText);
		ventana.cargaVentana(datos);		
	},

	onerror : function(e) {
		Ti.API.debug(e.error);
		alert('La conexión no tuvo exito, intente abrir la App nuevamente');
	},
	timeout : 5000
});
xhr.open("GET", url);
xhr.send();