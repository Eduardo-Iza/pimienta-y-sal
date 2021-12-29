//https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support
//https://express-validator.github.io/docs/
//https://github.com/alternock/express_base


const platos = require('./menu_items');


const generic_ctrl = {
    
    index: (req,res) =>{
        res.render('index', {platos});
    },

    detail: (req, res) =>{
        idMenu = req.params.id
        res.render('detalleMenu', {platos, idMenu});
    },

    about: (req,res) =>{
         res.render('aboutUs')
    
    },

    menu: (req,res) =>{
         res.render('menu', {platos})
    }
};

module.exports = generic_ctrl;
