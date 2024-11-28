const PageNotFoundHandler = (app) => {
  app.use((req, res, next) => {
    res.status(404).send({
      statusCode: res.statusCode,
      error: {
        message: `${
          req.url
        } route not found with ${req.method.toUpperCase()} method ,pleas check your path!`,
      },
    });
  });
};
module.exports = { PageNotFoundHandler };
