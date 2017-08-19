<?php 

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $corp = $_POST['user-corp'];
    $flat = $_POST['user-flat'];
    $floor = $_POST['user-floor'];

    $comment = $_POST['comment'];
    $pay = $_POST['pay-option'];
    $disturb = $_POST['dont-disturb'];
    $disturb = isset($disturb) ? 'Нет' : 'Да';


$mail_message = '
    <html>
        <head>
            <body>
                <h2>Информация о заказе</h2>
                <ul>
                    <li>Имя: '. $name . '</li>
                    <li>Телефон: '. $phone . '</li>
                    <li>Улица: '. $street . '</li>
                    <li>Дом: '. $house . '</li>
                    <li>Корпус: '. $corp . '</li>
                    <li>Квартира: '. $flat . '</li>
                    <li>Этаж: '. $floor . '</li>
                    <li>Комментарий к заказу: '. $comment . '</li>
                    <li>Способ оплаты: '. $pay . '</li>
                    <li>Нужно ли перезванивать клиенту: '. $disturb . '</li>
                </ul>
            </body>
        </head>
    </html>
    ';

   $headers = "From: Инна Ботвинник \r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('angel-a210497@mail.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    } else {
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);
?>