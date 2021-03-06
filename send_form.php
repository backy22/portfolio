<?php

include('includes/database.php');
include('includes/functions.php');

if(isset($_POST['email'])) {

    $email_to = "info@ayatsubakino.com";
    $email_subject = "Portfolio Contact";

    function died($error) {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['comment'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }

    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $comment = $_POST['comment']; // required

    $tz_object = new DateTimeZone('America/Toronto');
    $datetime = new DateTime();
    $datetime->setTimezone($tz_object);
    $sent_at =  $datetime->format('Y\-m\-d\ h:i:s');

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if(!preg_match($email_exp,$email_from)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }

    if(strlen($comment) < 2) {
        $error_message .= 'The Comments you entered do not appear to be valid.<br />';
    }

    if(strlen($error_message) > 0) {
        died($error_message);
    }

    $email_message = "Form details below.\n\n";

    $query = "INSERT INTO portfolio_contacts (
        name,
        email,
        comment,
        sent_at
    ) VALUES (
        '$name',
        '$email_from',
        '$comment',
        '$sent_at'
    )";

    mysqli_query ($connect, $query); 

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comment)."\n";

    // email headers
    $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);  
?>

<?php
    header('Location: index.php#thanks');
}
?>
