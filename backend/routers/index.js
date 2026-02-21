const routerVeiculos = require("./veiculosRoute");
const routerPecas = require("./pecasRoute");
module.exports = (app, express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerVeiculos);
  app.use(routerPecas);
};
