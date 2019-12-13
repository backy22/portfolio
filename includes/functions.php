<?php

session_start();

function page_secure()
{
    // If there is no ID in the session, redirect to login page
    if (!isset($_SESSION['id']))
    {
        header( 'Location: index.php' );
    }
}

function message_set( $message )
{
    $_SESSION['message'] = $message;
}

function message_get()
{
    if( isset( $_SESSION['message'] ) ) {
        echo $_SESSION['message'];
        unset( $_SESSION['message']);
    }
}
