<?php
header('Content-Type: application/json');

// Load configuration
require_once __DIR__ . '/config.php';

// Anti-spam configuration
$honeypot_field = 'website'; // Must match HTML
$min_submission_time = 3; // Seconds

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Honeypot check
    if (!empty($_POST[$honeypot_field])) {
        // Spam detected
        echo json_encode(["success" => false, "message" => "Spam detected."]);
        exit;
    }

    // 2. Validate inputs
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
    $notes = filter_var($_POST['notes'], FILTER_SANITIZE_STRING);

    if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid input."]);
        exit;
    }


    // 3. Process Product Requests
    $product_requests = "";
    
    // Add Free Text Request if present
    if (!empty($_POST['product_request_free'])) {
        $free_text = filter_var($_POST['product_request_free'], FILTER_SANITIZE_STRING);
        $product_requests .= "Specific Request: \n$free_text\n\n";
    }

    if (isset($_POST['products']) && is_array($_POST['products'])) {
        $product_requests .= "Itemized Request:\n";
        $products = $_POST['products'];
        $quantities = $_POST['quantities'];
        
        foreach ($products as $index => $prod) {
            if (!empty($prod)) {
                $qty = isset($quantities[$index]) ? $quantities[$index] : 1;
                $product_requests .= "- $prod (Qty: $qty)\n";
            }
        }
    }

    // 4. Construct Email - Using config values
    $to = CONTACT_EMAIL;
    $subject = "New Sales Inquiry from " . $name;
    
    $message = "New Inquiry Details:\n";
    $message .= "------------------------------------------------\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Company: $company\n\n";
    $message .= "Requested Products:\n";
    $message .= $product_requests ? $product_requests : "None specified.\n";
    $message .= "\nAdditional Notes:\n$notes\n";
    $message .= "------------------------------------------------\n";

    $headers = "From: " . FROM_EMAIL . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // 5. Send
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Mail server error."]);
    }

} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
}
?>
