<?php

$login = $_POST["login"];

if ($login == "denny") 
{
    echo json_encode(false); 
} 
else 
{
    echo json_encode(true);
}

?>