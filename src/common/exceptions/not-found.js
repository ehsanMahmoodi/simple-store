const PageNotFoundHandler = (app) => {
  app.use((req, res, next) => {
    res.status(404).render("./pages/website/404");
  });
};
module.exports = { PageNotFoundHandler };
