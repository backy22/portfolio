<?php

include('../includes/database.php');
include('../includes/functions.php');

if (isset($_GET['token']) && $_GET['token'] == $_SESSION['token']){
    // Check the database for a record matching the email and password
    $query = 'SELECT id,first,last,email
        FROM portfolio_users
        WHERE email = "'.$_POST['email'].'"
        LIMIT 1';
    $result = mysqli_query($connect, $query);

    // If there is a match log the user in
    if(mysqli_num_rows($result) == 1)
    {
        $record = mysqli_fetch_assoc( $result );

        $query = 'UPDATE portfolio_users SET
            password = "'.md5($_POST['password']).'"
            WHERE email = "'.$_POST['email'].'"
            LIMIT 1';

        mysqli_query($connect, $query);
        $_SESSION['email'] = $record['email'];
        
        header('Location: projects_list.php');

        //print_r( $record );
        //die();
    }

    // If there is no match redirect user to the login form
    else
    {
        header('Location: new_password.php');
    }

    //die( 'LOGIN' );
    echo mysqli_error($connect);
}else{
    header('Location: forget.php');
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
    <h2>New Password</h2>

    <div class="form login_form">
        <form method="post" action="new_password.php">
            Email:
            <input type="text" name="email">

            New Password:
            <input class="password" type="text" name="password">

            <div class="form__submit">
                <input type="submit" value="Login">
            </div>
        </form>
    </div>

</body>
</html>