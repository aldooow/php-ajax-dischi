
<?php include 'database.php'; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- CSS -->
    <link rel="stylesheet" href="dist/app.css">
    <!-- FONTAWESONE -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <!-- ROBOTO -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
    <title>PHP|DISCHI</title>
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
Consigli:
	1- Creare 2 file index diversi, uno per la versione col solo php, l’altro per la versione Ajax.
Il file zip contiene lo screenshot e il file database.php.
Oggi facciamo solo la versione index fatta col php utilizzando laravel-mix per il creare i file css, poi domani dopo la correzione facciamo la versione con Ajax.
-->

    <header>
        <div class="container">
            <img src="img/logo.png" alt="logo" />
            <select id="js_select">
              <option value="All">All</option>

              <?php foreach($database as $dati) {?>
              <option value="<?php echo  $dati['author'];?>"><?php echo  $dati['author'];?></option>
              <?php } ?>

            </select>
        </div>

    </header>

    <div class="cds-container container">

      <?php foreach($database as $dati) {?>
        <div class="cd">
          <img src="<?php echo  $dati['poster'];?>" alt="">
          <h3><?php echo  $dati['title'];?></h3>
          <span class="author"><?php echo  $dati['author'];?></span>
          <span class="year"><?php echo  $dati['year'];?></span>
        </div>
      <?php } ?>

    </div>


    <script src="dist/app.js">

    </script>


  </body>
</html>
