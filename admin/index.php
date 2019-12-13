<?php

include('../includes/database.php');
include('../includes/functions.php');

if (isset($_POST['email']))
{
    // Check the database for a record matching the email and password
    $query = 'SELECT id,first,last,email
        FROM portfolio_users
        WHERE email = "'.$_POST['email'].'"
        AND password = "'.md5($_POST['password']).'"
        LIMIT 1';
    $result = mysqli_query($connect, $query);

    // If there is a match log the user in
    if(mysqli_num_rows($result) == 1)
    {
        $record = mysqli_fetch_assoc( $result );

        $_SESSION['id'] = $record['id'];
        $_SESSION['first'] = $record['first'];
        $_SESSION['last'] = $record['last'];
        $_SESSION['email'] = $record['email'];
        
        header('Location: projects_list.php');
    }

    // If there is no match redirect user to the login form
    else
    {
        message_set("Email or Password is not found.");
        header('Location: index.php'); 
    }

    echo mysqli_error($connect);
}

?>

<!doctype html>
<html>
<head>
    <title>Portfolio CMS - Login</title>
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
    <div class="logo">
        <a href="projects_list.php"><img src="../img/logo.png" alt="the logo of aya tsubakino"></a>
    </div>
    <h1>Portfolio CMS</h1>
    <div class="alert"><?php message_get(); ?></div>
    <h2>Login</h2>

    <div class="form login_form">
        <form method="post" action="index.php">
            Email:
            <input type="text" name="email">

            Password:
            <input class="password" type="text" name="password">
            <a href="forget.php">Forget Password?</a>

            <div class="form__submit">
                <input type="submit" value="Login">
            </div>
        </form>
    </div>

</body>
</html>
