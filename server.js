require("dotenv").config();
const express = require("express");
const { ErrorHandler } = require("./src/common/exceptions/error-handler");
const { PageNotFoundHandler } = require("./src/common/exceptions/not-found");
const { swaggerConfig } = require("./src/configs/swagger.config");
const { MainRouter } = require("./src/main.routes");
const expressEjsLayouts = require("express-ejs-layouts");
const cookieParser = require('cookie-parser')
const main = () => {
  // initial app
  const app = express();
  // config's
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  require('./src/configs/mongoose.config')
  swaggerConfig(app)
  app.use(express.static("public"));
  app.use(expressEjsLayouts);
  app.set("view engine", "ejs");
  app.set("layout", "./layouts/website/main.ejs");
  app.set("layout extractScripts", true);
  app.set("layout extractStyles", true);
  app.use(cookieParser())
  // router
  app.use(MainRouter)
  // error hander
  ErrorHandler(app);
  PageNotFoundHandler(app);
  // app connection
  const PORT = process.env.PORT;
  const BASE_URL = process.env.BASE_URL;
  app.listen(PORT, () => console.log(`${BASE_URL}:${PORT}`));
};
main();
