const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');

const routes = require('./routes');
const app = express();
const PORT = 3333;



app.use(fileUpload());

app.use(cors());

app.use(helmet());

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', '../uploads')));

app.listen(PORT, () => {
    console.log('PORT', PORT);
});