import {Express} from 'express';

export function initRoutes(app: Express) {
    app.get('*', (req, res) => {
        res.status(200)
        res.send(`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blank</title>
    <link rel="stylesheet" href="/dist/index.css">
    <script src="/dist/index.js"></script>
</head>
<body>
    <h1>Hi there</h1>
</body>
</html>
`)
    })
}
