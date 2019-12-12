<?php

include('../includes/database.php');
include('../includes/functions.php');

page_secure();

$id = $_SESSION['id'];
$query = 'SELECT * FROM portfolio_users WHERE id = '.$id.' LIMIT 1';
$result = mysqli_query($connect, $query);
$user = mysqli_fetch_assoc($result);

if (isset($_POST['first']))
{

    if (!empty($_FILES['image']['tmp_name'])){
        $image = basename($_FILES['image']['name']);
        $filename = '../upload/'.$image;
        move_uploaded_file($_FILES['image']['tmp_name'], $filename);
    }elseif(!empty($id)){
        $image = $user['image']; 
    }else{
        $image = null;
    }

    $about = mysqli_real_escape_string($connect, $_POST['about']);
    $first = $_POST['first'];
    $last = $_POST['last'];

    $query = "UPDATE portfolio_users SET
        first = '$first',
        last = '$last',
        image = '$image',
        about = '$about'
        where id = '$id'
        LIMIT 1";

    mysqli_query ($connect, $query);
    header('Location: user_edit.php');
    echo mysqli_error($connect);
}

?>

<!doctype html>
<html>
<head>
    <title>Portfolio CMS - User Edit</title>
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
                    <li><a href="projects_add.php">New Project</a></li>
                    <li class="active"><a href="user_edit.php">My Page</a></li>
                    <li><a href="contacts_list.php">Contacts</a></li>
                    <li><a href="../index.php" target="blank">Client Page</a></li>
                    <li><a href="logout.php">Logout</a></li>
                </ul>
            </div>
        </div>

        <main class="main">
            <h2>Edit Users</h2>

            <div class="form">
                <form method="post" action="user_edit.php?id=<?php echo $_SESSION['id']; ?>" enctype="multipart/form-data">
                    First:
                    <input type="text" name="first" value="<?php echo $user['first']; ?>">

                    Last:
                    <input type="text" name="last" value="<?php echo $user['last']; ?>">

                    Image:
                    <br>
                    <?php if (!empty($user['image'])): ?>
                        <div class="image_form">
                            <img src="../upload/<?php echo $user['image']; ?>" alt="image of user">
                        </div>
                    <?php endif; ?> 
                    <input type="file" name="image">
                    <br>  

                    About:
                    <textarea name="about"><?php echo $user['about']; ?></textarea>

                    <div class="form__submit">
                        <input type="submit" value="Edit User">
                    </div>
                </form>
            </div>
        </main>
    </div>

</body>
</html>
