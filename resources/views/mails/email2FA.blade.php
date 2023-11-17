<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email token</title>
</head>
<body>
    <div class="body">
        <div class="block_token">
            <h3 class="h_token">{{$token}}</h3>
        </div>
    </div>
    <style>
        .body {
            box-sizing: border-box;
            max-width: 350px;
            width: 100%;
            height: 270px;
            background-color: black;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .block_token {
            max-width: 150px;
            max-height: 90px;
            width: 100%;
            height: 100%;
            background-color: rgb(14, 14, 14);
            text-align: center;
        }
        .h_token {
            color: white;
        }
    </style>
</body>
</html>