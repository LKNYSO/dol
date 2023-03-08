<?php
//Reads the variables sent via POST
$sessionId = $_POST["sessionId"];
$serviceCode = $_POST["serviveCode"];
$phoneNumber = $_POST["phoneNumber"];
$text = $_POST['text']

if ($text =="") {
    //This is the first request> Note how we start the response with CON
    $response = 'CON What would you want to check \n';
    $response = '1. Account Number \n';
    $response = '2 My Phone Number';
} else if($text == '2'){
    //Business logic for the first level response
    //This is a terminal request> Note how we start with END.
    $response = 'END Your phone number is ',$phoneNumber;

} else if($text == '1*2') {
    //This is a terminal request> Note how we start with END.
    $accountNumber = "ACC1001";

    //This is a terminal request> Note how we start with END.
    $response = 'END Your phone number is ',$accountNumber;

    //This is a second level responnse where the the user selected 1 in thte first instance

} else if ('1*2') {
    //This is a second level response where the user selected 1 in the first instance
    $balance = 'R52000,000';
    
    //This is a terminal request. Note how we start with END.
    $response = 'END Your balance is ',$balance;
}
//echo the response to the API. The response depends on the statementt that is fulfilled in each instance
header('content-type; text/plain');
echo $response;

?>