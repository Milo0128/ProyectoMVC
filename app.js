const express = require('express');
const mainRouter = require('./routers/main');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, "./public")
/* app.use = express(); */

app.use(express.static(publicPath));

app.use('/', mainRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server started on http://localhost:' + port);
});