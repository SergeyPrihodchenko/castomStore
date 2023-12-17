<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test letter</title>
</head>

<body style="margin: 0; padding: 0">
    <h4>Тестовое письмо</h4>
    <table {{-- style="padding: 0 0 100px 300px;" --}}>
        <tbody>
            <tr>
                <td>
                    <table cellspacing="0" cellpadding="0" border="0" width="600" aling="center">
                        <tbody>
                            <tr>
                                <td bgcolor="#4caf50" colspan="3">
                                    <a style="text-decoration: none;" trrget="_new" href="http://localhost/">
                                        <div
                                            style="font-weight: bold; font-family: Integral CF; font-size: 20px; text-align: center; padding: 30px; color: #000000;">
                                            SHOP.COM</div>
                                    </a>
                                </td>
                            </tr>
                            <tr bgcolor="#fff8dc">
                                <td>
                                    <a style="text-decoration: none;" trrget="_new" href="http://localhost/">
                                        <div
                                            style="font-weight: 400; font-family: Integral CF; font-size: 18px; text-align: center; padding: 5px; color: #000000;">
                                            Категории</div>
                                    </a>
                                </td>

                                <td
                                    style="border-right: 1px solid #a9a9a9; border-left: 1px solid #a9a9a9; padding: 0 10px; margin: 0 10%;">
                                    <a style="text-decoration: none;" trrget="_new" href="http://localhost/">
                                        <div
                                            style="font-weight: 400; font-family: Integral CF; font-size: 18px; text-align: center; color: #000000;">
                                            Акции</div>
                                    </a>
                                </td>
                                <td>
                                    <a style="text-decoration: none;" trrget="_new" href="http://localhost/">
                                        <div
                                            style="font-weight: 400; font-family: Integral CF; font-size: 18px; text-align: center; color: #000000">
                                            Новинки</div>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table table="" cellspacing="0" cellpadding="0" border="0" width="400" aling="center"
                        bgcolor="#f0f8ff" style="padding-top: 50px; border-radius: 8px; margin: 50px 0 0 100px;">
                        <tbody>
                            <tr>
                                <th
                                    style="font-size: 20px; text-align: center; font-weight: 900; font-family: Satoshi; color: #a52a2a;">
                                    Рады что вы с нами!</th>
                            </tr>
                            <tr>
                                <td
                                    style="font-size: 16px; text-align: center; font-weight: 400; font-family: Satoshi;">
                                    Благодарим за выбор SHOP.COM</td>
                            </tr>
                            <tr>
                                <td
                                    style="font-size: 18px; text-align: left; font-weight: 400; font-family: Satoshi; padding-top: 100px;">
                                    Добро пожаловать на SHOP.COM</td>
                            </tr>
                            <tr>
                                <td
                                    style="font-size: 18px; text-align: left; font-weight: 400; font-family: Satoshi; padding-bottom: 50px;">
                                    Для завершения регистрации введите код</td>
                            </tr>
                            <tr>
                                <td
                                    style="font-size: 20px; text-align: left; font-weight: 900; font-family: Satoshi; color: #4caf50;">
                                    Ваш код для авторизации на SHOP.COM</td>
                            </tr>
                            <tr>
                                <td
                                style="font-size: 30px; text-align: center; font-weight: 900; font-family: Satoshi; color: #4caf50;">
                                {{ $code }}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>
