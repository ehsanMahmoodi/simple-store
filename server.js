require("dotenv").config();
const express = require("express");
const { ErrorHandler } = require("./src/common/exceptions/error-handler");
const { PageNotFoundHandler } = require("./src/common/exceptions/not-found");
const main = () => {
  // initial app
  const app = express();
  // config's
  require('./src/configs/mongoose.config')
  // error hander
  ErrorHandler(app);
  PageNotFoundHandler(app);
  // app connection
  const PORT = process.env.PORT;
  const BASE_URL = process.env.BASE_URL;
  app.listen(PORT, () => console.log(`${BASE_URL}:${PORT}`));
};
main();
