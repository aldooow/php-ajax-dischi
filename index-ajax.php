<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- CSS -->
    <link rel="stylesheet" href="dist/app.css">
    <title>AJAX|DISCHI</title>
  </head>
  <body>

<!--
    Stampare a schermo una decina di dischi musicali (vedi screenshot nel file zip) in due modi diversi:
	- Solo con l’utilizzo di PHP, che stampa direttamente i dischi in pagina: al caricamento della pagina ci saranno tutti i dischi.
	- Attraverso l’utilizzo di AJAX: al caricamento della pagina ajax chiederà attraverso una chiamata i dischi a php e li stamperà attraverso handlebars.
Utilizzare: Html, Sass, JS, jQuery, handlebars, Php
Font: Lato
Opzionale:
- Attraverso un’altra chiamata ajax, filtrare gli
album per artista

-->

    <header>
        <div class="container">
            <img src="img/logo.png" alt="logo" />
            <select id="js_select">
              <option value="All">All</option>
              <!-- CHIAMATA AJAX AUTHOR -->
            </select>
        </div>

    </header>

    <div class="cds-container container">

      <!-- CHIAMATA AJAX CD -->

    </div>

    <!-- TEMPLATE CD-->
    <script id="entry-template"  type="text/x-handlebars-template">

      <div class="cd">
        <img src="{{ poster }}" alt="">
        <h3>{{ title }}</h3>
        <span class="author">{{ author }}</span>
        <span class="year">{{ year }}</span>
        <span class="genre">{{ genre }}</span>
      </div>

    </script>
    <!-- END TEMPLATE CD -->

    <!-- TEMPLATE AUTHOR-->
    <script id="author-template"  type="text/x-handlebars-template">

      <option value="{{ author }}">{{ author }}</option>

    </script>
    <!-- END TEMPLATE AUTHOR -->

    <!-- SCRIPT -->
    <script src="dist/app.js">

    </script>
    <!-- END SCRIPT -->

  </body>
</html>
