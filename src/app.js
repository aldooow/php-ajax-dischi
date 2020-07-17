var $ = require( "jquery" );
var Handlebars = require("handlebars");

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

  /*
  BONUS:
  - Attraverso un’altra chiamata ajax, filtrare gli
  album per artista
  */


  $.ajax(
    {
      url: 'http://localhost:8888/php-ajax-dischi/database.php',
      method: 'GET',
      success: function(data){
        // console.log(data[0]['author'])
        // Handlebars.
        var source = $("#author-template").html();
        var template = Handlebars.compile(source);

        // Variante di tutto il contenuto del URL (Array di OBJECTS).
        var cds = data;
        var authorAll = [];
        // Ciclo FOR con Lunghezza della Variante che contiene tutta la risposta URL.
         for(var i = 0; i < cds.length; i++ ){
           // Variante di singolo OBJECT che è dentro l'Array.
           var cd = data[i];
           var author = cd['author'];
           // Se AUTHOR non è ancora incluso, lo stampo nel SELECT, Altrementi non lo aggiungo di nuovo.
           if (authorAll.includes(author) == false){
             authorAll.push(author)
             // TEMPLATE da Appendere.
             var html = template(cd);
             // Appendere TEMPLATE HTML nel Elemento desiderato.
             $("#js_select").append(html);
           }
         }
      },
      error: function(richiesta, stato, errore){
          alert('ERROR');
      }
    }
  );

  $(document).change(function(){
    // Creare una Variante per la VALUE di SELECT.
    var genreValueSelect = $("#js_select").val();
    // Per Ogni CD esegue questa funzione.
    $(".cd").each(function() {
      // Creare una Variante Per il GENRE di THIS CD.
      var authorCD = $(this).find(".author").text();

      // Se il VALUE del SELECT è uguale ad "All", Mostrare Tutti CD.
      if(genreValueSelect == "All"){
        $(".cd").show();
      } // Altrementi Se il VALUE del SELECT è uguale a GENRE nel CD, SHOW questo CD.
      else if(genreValueSelect == authorCD){
        $(this).show();
      } // Altrementi HIDE questo CD.
      else {
        $(this).hide();
      }
    });

  });

});
