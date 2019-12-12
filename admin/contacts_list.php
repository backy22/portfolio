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

?>

<!doctype html>
<html lang="en">
<head>
    <title>Portfolio CMS - Contact List</title>
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
                    <li><a href="user_edit.php">My Page</a></li>
                    <li class="active"><a href="contacts_list.php">Contacts</a></li>
                    <li><a href="../index.php" target="blank">Client Page</a></li>
                    <li><a href="logout.php">Logout</a></li>
                </ul>
            </div>
        </div>

        <main class="main">
            <h2>Manage Contacts</h2>

            <?php
                $query = 'SELECT
                    id, 
                    name,
                    email,
                    comment,
                    sent_at
                    FROM portfolio_contacts ORDER BY sent_at ASC';
                $result = mysqli_query($connect, $query);
            ?>

            <p>Displaying <?php echo mysqli_num_rows($result); ?>Contacts</p>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Comment</th>
                    <th>Sent Date</th>
                </tr>

                <?php while($record = mysqli_fetch_assoc($result)): ?>
                    <tr>
                        <td><?php echo $record['id']; ?></td>
                        <td><?php echo $record['name']; ?></td>
                        <td><?php echo $record['email']; ?></td>
                        <td><?php echo $record['comment']; ?></td>
                        <td><?php echo $record['sent_at']; ?></td>
                    </tr>
                <?php endwhile; ?>
            </table>
        </main>
    </div>
</body>
</html>
