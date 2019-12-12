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
