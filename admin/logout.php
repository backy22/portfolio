<?php

include('../includes/database.php');
include('../includes/functions.php');

session_destroy();

header('Location: index.php');

