<?php

include('includes/database.php');
include('includes/functions.php');

$query = 'SELECT * FROM portfolio_categories';
$categories = mysqli_query($connect, $query);

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = 'SELECT * FROM portfolio_projects WHERE id = '.$id.' LIMIT 1';
    $record = mysqli_query($connect, $query);
    $project = mysqli_fetch_assoc($record);
    $skills = json_decode($project['skills'], true);
    $images = json_decode($project['images'], true);
    $youtube_ids = json_decode($project['youtube_ids'], true);
}

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
          <li class="active"><a href="index.php">Portfolio</a></li>
          <li><a href="about.php">About</a></li>
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

    <section id="projects">
      <div class="thanks">
        <h1>Thank you for contacting me. I will be in touch with you very soon.</h1>
      </div>
    <?php if (isset($_GET['id'])) : ?>
      <div class="detail">
        <h1 class="detail-title"><?php echo $project['title']; ?></h1>
        <h4 class="detail-property">
            <?php foreach($skills as $value): ?>
                <?php echo $value; ?><br>
            <?php endforeach; ?>
        </h4>
        <div class="detail-text">
            <?php echo nl2br($project['explanation']); ?>
            <p class="link">
            <?php if(!empty($project['website_url'])): ?>
                <a href="<?php echo $project['website_url']; ?>" target="_blank"> >> View the website</a>&nbsp;&nbsp;
            <?php endif; ?>
            <?php if(!empty($project['github_url'])): ?>
                <a href="<?php echo $project['github_url']; ?>" target="_blank"> >> Sourse Code</a>&nbsp;&nbsp;
            <?php endif; ?>
            </p>
        </div>
        <div class="detail-images">
            <?php foreach($images as $value): ?>
                <img class="demo" src="img/<?php echo $value; ?>" alt="image of project">
            <?php endforeach; ?>
            <?php if(!empty($youtube_ids)): ?>
                <?php foreach($youtube_ids as $value): ?>
                    <div class="video demo"><iframe width="853" height="480" src="https://www.youtube.com/embed/<?php echo $value ?>?&autoplay=1&rel=0&loop=1&playlist<?php echo $value ?>" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
      </div>
    <?php endif; ?>

    <?php while($category = mysqli_fetch_assoc($categories)): ?>
        <div class="projects">
        <h2><?php echo $category['name']; ?></h2>
        <?php 
            $category_id = $category['id'];
            $query = 'SELECT
            portfolio_projects.id,
            title,
            thumbnail,
            push_rank,
            name
            FROM portfolio_projects 
            LEFT JOIN portfolio_categories ON portfolio_categories.id = portfolio_projects.category_id
            WHERE category_id = '.$category_id.'
            ORDER BY push_rank DESC';
            $result = mysqli_query($connect, $query); 
        ?>

        <?php while($record = mysqli_fetch_assoc($result)): ?>
            <a href="index.php?id=<?php echo $record['id']; ?>">
                <div class="project">
                    <img src="upload/<?php echo $record['thumbnail']; ?>" alt="thumbnail image">
                    <div class="title"><?php echo $record['title']; ?></div>
                </div>
            </a>
        <?php endwhile; ?>
      </div>
    <?php endwhile; ?>

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
