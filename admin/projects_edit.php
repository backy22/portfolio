<?php

include('../includes/database.php');
include('../includes/functions.php');

page_secure();

$id = $_GET['id'];
$query = 'SELECT * FROM portfolio_projects WHERE id = '.$id.' LIMIT 1';
$result = mysqli_query($connect, $query);
$project = mysqli_fetch_assoc($result);

if (isset($_POST['title']))
{

    if (!empty($_FILES['thumbnail']['tmp_name'])){
        $thumbnail = basename($_FILES['thumbnail']['name']);
        $filename = '../upload/'.$thumbnail;
        move_uploaded_file($_FILES['thumbnail']['tmp_name'], $filename);
    }elseif(!empty($project['thumbnail'])){
        $thumbnail = $project['thumbnail']; 
    }else{
        $thumbnail = null;
    }

    if (!empty($project['images'])){
        $images = json_decode($project['images']);
        if (!empty($_POST['removed_images'])){
            $removed_images = $_POST['removed_images'];
            $images = array_diff($images, $removed_images);
        }
    }else{
        $images = array();
    }

    if (!empty($_FILES['images'])){
        for($i = 0; $i < count($_FILES["images"]["name"]); $i++ ){
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

    $query = "UPDATE portfolio_projects SET
        title = '$title',
        thumbnail = '$thumbnail',
        skills = '$skills',
        explanation = '$explanation',
        push_rank = '$push_rank',
        website_url = '$website_url',
        github_url = '$github_url',
        youtube_ids = '$youtube_ids',
        images = '$images',
        category_id = '$category_id'
        where id = '$id'
        LIMIT 1";

    mysqli_query ($connect, $query);
    header('Location: projects_list.php');
    echo mysqli_error($connect);
}

$skills = implode(",", json_decode($project['skills'], true));
$youtube_ids = implode(",", json_decode($project['youtube_ids'], true));

?>

<!doctype html>
<html>
<head>
    <title>Portfolio CMS - Project Edit</title>
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
                    <li class="active"><a href="projects_list.php">Manage Projects</a></li>
                    <li><a href="projects_add.php">New Project</a></li>
                    <li><a href="user_edit.php">My Page</a></li>
                    <li><a href="contacts_list.php">Contacts</a></li>
                    <li><a href="../index.php" target="blank">Client Page</a></li>
                    <li><a href="logout.php">Logout</a></li>
                </ul>
            </div>
        </div>

        <main class="main">
            <h2>Edit Projects</h2>

            <div class="form">
                <form method="post" action="projects_edit.php?id=<?php echo $_GET['id'] ?>" enctype="multipart/form-data">
                    Title:
                    <input type="text" name="title" value="<?php echo $project['title']; ?>">

                    Thumbnail:
                    <div class="image_form">
                        <?php if (!empty($project['thumbnail'])): ?>
                            <img src="../upload/<?php echo $project['thumbnail']; ?>" alt="thumbnail of project">
                        <?php endif; ?>
                        <br>
                        <input type="file" name="thumbnail">
                    </div>
                    <br> 

                    Skills:
                    <input type="text" name="skills" value="<?php echo $skills; ?>">

                    Explanation:
                    <textarea name="explanation"><?php echo $project['explanation']; ?></textarea>

                    Push Rank:
                    <input type="number" name="push_rank" value="<?php echo $project['push_rank']; ?>">

                    Website URL:
                    <input type="text" name="website_url" value="<?php echo $project['website_url']; ?>">

                    Github URL:
                    <input type="text" name="github_url" value="<?php echo $project['github_url']; ?>">

                    Youtube Video IDs:
                    <input type="text" name="youtube_ids" value="<?php echo $youtube_ids; ?>">

                    Images:
                    <div class="image_form">
                        <?php if (!empty($project['images'])): ?>
                            <?php foreach(json_decode($project['images'], true) as $value): ?>
                                <input type="checkbox" name="removed_images[]" value="<?php echo $value; ?>">remove<br>
                                <img src="../upload/<?php echo $value; ?>" alt="images of project">
                            <?php endforeach; ?>
                        <?php endif; ?>
                        <br>
                        <input type="file" name="images[]" multiple="multiple">
                    </div>
                    <br>

                    Category:
                    <?php
                    $query = 'SELECT * FROM portfolio_categories ORDER BY name';
                    $result = mysqli_query($connect, $query);
                    ?>

                    <?php while($record = mysqli_fetch_assoc($result)): ?>
                        <input type="radio" name="category_id" value="<?php echo $record['id']; ?>"
                            <?php if($record['id'] == $project['category_id']): ?>
                                checked
                            <?php endif; ?>              
                        ><?php echo $record['name']; ?>
                    <?php endwhile; ?>

                    <div class="form__submit">
                        <input type="submit" value="Edit Project">
                    </div>
                </form>
            </div>
        </main>
    </div>

</body>
</html>
