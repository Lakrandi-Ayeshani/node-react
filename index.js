const express = require('express'); 
const uuid = require('uuid');
const path = require('path');
const { deserialize } = require('v8');
const logger = require('./middleware/logger');

const app = express();

//init middleware
//app.use(logger); 

//Body Paeser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

 
/*app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));});*/ 

    // set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routers/api/members'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
     