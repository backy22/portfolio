<?php

include('../includes/database.php');
include('../includes/functions.php');

page_secure();

if(isset($_GET['delete']))
{
    $query = 'DELETE FROM portfolio_projects WHERE id = '.$_GET['delete'].' LIMIT 1';
    mysqli_query($connect, $query);
    header('Location: projects_list.php');
}

if(isset($_POST['search'])){
    $keyword = $_POST['search'];
    $query = "SELECT
        portfolio_projects.id, 
        title,
        thumbnail,
        push_rank,
        category_id,
        name
        FROM portfolio_projects LEFT JOIN portfolio_categories ON portfolio_categories.id = portfolio_projects.category_id 
        WHERE title like '%$keyword%'
        ORDER BY id ASC";
}else{
    $query = 'SELECT
        portfolio_projects.id, 
        title,
        thumbnail,
        push_rank,
        category_id,
        name
        FROM portfolio_projects LEFT JOIN portfolio_categories ON portfolio_categories.id = portfolio_projects.category_id ORDER BY id ASC';
}

$result = mysqli_query($connect, $query);

?>

<!doctype html>
<html lang="en">
<head>
    <title>Portfolio CMS - Project List</title>
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
            <h2>Manage Projects</h2>

            <div class="form search__form">
                <form action="" method="post">
                    <input type="text" name="search">
                    <input type="submit" name="submit" value="Search">
                </form>
            </div>

            <p>Displaying <?php echo mysqli_num_rows($result); ?>Projects</p>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Push Rank</th>
                    <th>Title</th>
                    <th>Thumbnail</th>
                    <th>Category</th>
                    <th></th>
                    <th></th>
                </tr>

                <?php while($record = mysqli_fetch_assoc($result)): ?>
                    <tr>
                        <td><?php echo $record['id']; ?></td>
                        <td><?php echo $record['push_rank']; ?></td>
                        <td><?php echo $record['title']; ?></td>
                        <td>
                            <?php if($record['thumbnail']): ?>
                                <img class="projects_list__thumbnail" src="../upload/<?php echo $record['thumbnail']; ?>">
                            <?php endif; ?>
                        </td>
                        <td><?php echo $record['name']; ?></td>
                        <td><a href="projects_edit.php?id=<?php echo $record['id']; ?>">Edit</a></td>
                        <td><a href="projects_list.php?delete=<?php echo $record['id']; ?>">Delete</td>
                    </tr>
                <?php endwhile; ?>
            </table>
        </main>
    </div>

</body>
</html>
