const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const genericCTRL = require('./controllers/generic_ctrl')


app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log('start server')
});

app.get('/', genericCTRL.index);
app.get('/detail/:id', genericCTRL.detail);
app.get('/about', genericCTRL.about);
app.get('/menu', genericCTRL.menu);




