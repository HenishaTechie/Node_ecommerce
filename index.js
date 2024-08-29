// const http = require('http');
// const port = 4000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.end(`server start`);
// });

// server.listen(port,()=>{
//     console.log('server start....');
// });

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json);

const routes = require('./router/index');
require('./models/index')


app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
