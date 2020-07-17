var $ = require( "jquery" );
var Handlebars = require("handlebars");
var template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

$(document).ready(function() {

  /*
  - Attraverso l’utilizzo di AJAX: al caricamento della pagina ajax chiederà
  attraverso una chiamata i dischi a php e li stamperà attraverso handlebars.
  */
  $.ajax(
    {
      url: 'http://localhost:8888/php-ajax-dischi/database.php',
      method: 'GET',
      success: function(data){
        // Handlebars.
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        // Variante di tutto il contenuto del URL (Array di OBJECTS).
        var cds = data;
        // Ciclo FOR con Lunghezza della Variante che contiene tutta la risposta URL.
         for(var i = 0; i < cds.length; i++ ){
           // Variante di singolo OBJECT che è dentro l'Array.
           var cd = cds[i];
           // TEMPLATE da Appendere.
           var html = template(cd);
           // Appendere TEMPLATE HTML nel Elemento desiderato.
           $(".cds-container").append(html);
         }

      },
      error: function(richiesta, stato, errore){
          alert('ERROR');
      }
    }
  );


});
