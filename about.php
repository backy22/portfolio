<?php

include('includes/database.php');
include('includes/functions.php');

$query = 'SELECT * FROM portfolio_users WHERE id = 1 LIMIT 1';
$result = mysqli_query($connect, $query);
$user = mysqli_fetch_assoc($result);

?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>AyaTsubakino</title>
    <meta name="description" content="Portfolio website of Aya Tsubakino">
    <meta name="keyword" content="Portfolio,AyaTsubakino">
    <meta name="author" content="aya tsubakino">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link rel="icon" type="image/jpg" href="img/logo_favicon.jpg">
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans%7CMontserrat" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="index.php">Portfolio</a></li>
          <li class="active"><a href="about.php">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <div class="menu">
        <p>menu</p>
      </div>
      <div class="logo">
        <a href="index.php"><img src="img/logo.png" alt="the logo of aya tsubakino"></a>
      </div>
    </header>
   
    <section id="about">
      <div class="about">
        <div class="about-image">
            <img src="upload/<?php echo $user['image']; ?>">
        </div>
        <div class="about-text">
          <h1>About</h1>
          <div><?php echo $user['about']; ?> <br><br>You can download my resume <a href="AyaTsubakino_resume.pdf" target="blank">here</a>.</div>
          <div class="skills">
            <div class="skill"><img src="img/html5.svg" alt="icon of html5"></div>
            <div class="skill"><img src="img/css3.svg" alt="icon of css3"></div>
            <div class="skill"><img src="img/javascript.svg" alt="icon of javascript"></div>
            <div class="skill"><img src="img/ruby-on-rails.svg" alt="icon of ruby on rails"></div>
            <div class="skill"><img src="img/php.svg" alt="icon of php"></div>
            <div class="skill"><img src="img/wordpress.svg" alt="icon of wordpress"></div>
            <div class="skill"><img src="img/illustrator.svg" alt="icon of adobe illustrator"></div>
            <div class="skill"><img src="img/photoshop.svg" alt="icon of adobe photoshop"></div>
            <div class="skill"><img src="img/xd.svg" alt="icon of adobe xd"></div>
            <div class="skill"><img src="img/after-effects.svg" alt="icon of adobe after effects"></div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <ul>
        <li><a href="https://www.linkedin.com/in/ayatsubakino/" target="blank"><img src="img/linkedin.svg" alt="icon of linkedin"></a></li>
        <li><a href="https://www.instagram.com/ayatsubakino/" target="blank"><img src="img/instagram.svg" alt="icon of instagram"></a></li>
        <li><a href="https://github.com/backy22" target="blank"><img src="img/github.svg" alt="icon of github"></a></li>
      </ul>
    </footer>
    <script src="js/script.js"></script>
  </body>
</html>
