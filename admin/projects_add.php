<?php

include('../includes/database.php');
include('../includes/functions.php');

page_secure();

if (isset($_POST['title']))
{

    if (!empty($_FILES['thumbnail']['tmp_name'])){
        $thumbnail = basename($_FILES['thumbnail']['name']);
        $filename = '../upload/'.$thumbnail;
        move_uploaded_file($_FILES['thumbnail']['tmp_name'], $filename);
    }else{
        $thumbnail = null;
    }

    $images = array();
    if (!empty($_FILES['images'])){
        for($i = 0; $i < count($_FILES["images"]["tmp_name"]); $i++ ){
            if(is_uploaded_file($_FILES["images"]["tmp_name"][$i])){
                $image = basename($_FILES['images']['name'][$i]);
                $filename = '../upload/'.$image;
                move_uploaded_file($_FILES["images"]["tmp_name"][$i], $filename);
                $images[] = $image;
            }
        }
    }
    $images = json_encode($images);

    $skills = explode(",", $_POST['skills']);
    $skills = json_encode($skills);
    if(!empty($_POST['youtube_ids'])){
        $youtube_ids = explode(",", $_POST['youtube_ids']);
        $youtube_ids = json_encode($youtube_ids);
    }else{
        $youtube_ids = null;
    }


    $title = mysqli_real_escape_string($connect, $_POST['title']);
    $explanation = mysqli_real_escape_string($connect, $_POST['explanation']);

    $push_rank = $_POST['push_rank'];
    $website_url = $_POST['website_url'];
    $github_url = $_POST['github_url'];
    $category_id = $_POST['category_id'];

    $query = "INSERT INTO portfolio_projects (
        title,
        thumbnail,
        skills,
        explanation,
        push_rank,
        website_url,
        github_url,
        youtube_ids,
        images,
        category_id
    ) VALUES (
        '$title',
        '$thumbnail',
        '$skills',
        '$explanation',
        '$push_rank',
        '$website_url',
        '$github_url',
        '$youtube_ids',
        '$images',
        '$category_id'
    )";

    mysqli_query ($connect, $query);
    header('Location: projects_list.php');
    echo mysqli_error($connect);
}

?>

<!doctype html>
<html>
<head>
    <title>Portfolio CMS - Project Add</title>
    <meta charset="UTF-8">
    <meta name="description" content="Portfolio CMS of Aya Tsubakino">
    <meta name="author" content="aya tsubakino">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="../css/admin.css" rel="stylesheet" type="text/css">
    <link rel="icon" type="image/jpg" href="../img/logo_favicon.jpg">
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans%7CMontserrat" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>

    <div class="container">
        <div class="sidebar">
            <div class="sticky">
                <div class="logo">
                    <a href="projects_list.php"><img src="../img/logo-white.png" alt="the logo of aya tsubakino"></a>
                </div>
                <h2>Portfolio CMS</h2>

                <ul>
                    <li><a href="projects_list.php">Manage Projects</a></li>
                    <li class="active"><a href="projects_add.php">New Project</a></li>
                    <li><a href="user_edit.php">My Page</a></li>
                    <li><a href="contacts_list.php">Contacts</a></li>
                    <li><a href="../index.php" target="blank">Client Page</a></li>
                    <li><a href="logout.php">Logout</a></li>
                </ul>
            </div>
        </div>

        <main class="main">
            <h2>Add Project</h2>

            <div class="form">
                <form method="post" action="projects_add.php" enctype="multipart/form-data">
                    Title:
                    <input type="text" name="title">

                    Thumbnail:
                    <input type="file" name="thumbnail">
                    <br> 

                    Skills:
                    <input type="text" name="skills">

                    Explanation:
                    <textarea name="explanation"></textarea>

                    Push Rank:
                    <input type="number" name="push_rank">

                    Website URL:
                    <input type="text" name="website_url">

                    Github URL:
                    <input type="text" name="github_url">

                    Youtube Video IDs:
                    <input type="text" name="youtube_ids">

                    Images:
                    <input type="file" name="images[]" multiple>
                    <br>

                    Category:

                    <?php
                    $query = 'SELECT * FROM portfolio_categories ORDER BY name';
                    $result = mysqli_query($connect, $query);
                    ?>

                    <?php while($record = mysqli_fetch_assoc($result)): ?>
                        <input type="radio" name="category_id" value="<?php echo $record['id']; ?>"><?php echo $record['name']; ?>
                    <?php endwhile; ?>

                    <div class="form__submit">
                        <input type="submit" value="Add Project">
                    </div>
                </form>
            </div>
        </main>
    </div>

</body>
</html>
