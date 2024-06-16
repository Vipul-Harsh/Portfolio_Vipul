<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // REPLACE THIS 2 LINES AS YOU DESIRE
    $email_to = "harshvipul.1704@gmail.com";
    $email_subject = "You've got a new submission";

    function problem($error)
    {
        echo "Oh looks like there is some problem with your form data: <br><br>";
        echo $error . "<br><br>";
        echo "Please fix those to proceed.<br><br>";
        die();
    }

    // Read the JSON data from the request
    $data = json_decode(file_get_contents("php://input"), true);

    // validation expected data exists
    if (
        !isset($data['fullName']) ||
        !isset($data['email']) ||
        !isset($data['subject']) ||
        !isset($data['message'])
    ) {
        problem('Oh looks like there is some problem with your form data.');
    }

    $name = $data['fullName']; // required
    $email = $data['email']; // required
    $subject = $data['subject']; // required
    $message = $data['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'Email address does not seem valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'Name does not seem valid.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'Message should not be less than 2 characters<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details following:\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Subject: " . clean_string($subject) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);

    echo json_encode(['status' => 'success', 'message' => 'Thanks for contacting us, we will get back to you as soon as possible.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
