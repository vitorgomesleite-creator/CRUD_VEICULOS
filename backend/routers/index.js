const routerVeiculos = require("./veiculosRoute");
module.exports =(app,express) =>{
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(routerVeiculos);
}