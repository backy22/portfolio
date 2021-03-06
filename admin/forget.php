<?php

include('../includes/database.php');
include('../includes/functions.php');

if (isset($_POST['email']))
{
    // Check the database for a record matching the email
    $query = 'SELECT id,first,last,email
        FROM portfolio_users
        WHERE email = "'.$_POST['email'].'"
        LIMIT 1';
    $result = mysqli_query($connect, $query);

    // If there is a match, send a link to reset password
    if(mysqli_num_rows($result) == 1)
    {
        $record = mysqli_fetch_assoc( $result );
        $email_to = $record['email'];
        $email_subject = "Reset Password link of Portfolio CMS";

        $token = bin2hex(random_bytes(50));
  
        $query = 'UPDATE portfolio_users SET
                token = "'.$token.'"
                WHERE email = "'.$record['email'].'"
                LIMIT 1';
        mysqli_query($connect, $query);

        $email_message = "<html><body>
            <div>
                Hi there, click on this 
                <a href=\"https://ayatsubakino.com/admin/new_password.php?&token=".$token."\">link</a> 
                to reset your password on our site
            </div>
            </body></html>";
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';
        $headers[] = "From: info@ayatsubakino.com";
        @mail($email_to, $email_subject, $email_message, $headers);

        print_r("As it takes some time to get the link through email, you can access the link from <a href=\"https://ayatsubakino.com/admin/new_password.php?&token=".$token."\">here</a>. ※Only for checking my assignment");
    }

    // If there is no match, redirece user to the login form
    else
    {
        message_set("There is no match with the email.");
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
        <form method="post" action="forget.php">
            Email:
            <input type="text" name="email">

            <div class="form__submit">
                <input type="submit" value="Send">
            </div>
        </form>
    </div>

</body>
</html>
