const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .get((req, res, next) => {
    res.end("getting all leaders");
  })
  .post((req, res, next) => {
    res.end(`name: ${req.body.name}, details: ${req.body.designation}`);
  })
  .put((req, res, next) => {
    res.end(`name: ${req.body.name}, details: ${req.body.designation}`);
  })
  .delete((req, res, next) => {
    res.end("deleteing leaders require adminstratot permission");
  });

leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    res.end(`leader id: ${req.params.leaderId}`);
  })
  .post((req, res, next) => {
    res.end(
      `post from leader of id: ${req.params.leaderId}, name: ${req.body.name}`
    );
  })
  .put((req, res, next) => {
    res.end(
      `editing leader of id: ${req.params.leaderId}, name: ${req.body.name}`
    );
  })
  .delete((req, res, next) => {
    res.end(`deleteiting leader ${req.params.leaderId}`);
  });

module.exports = leaderRouter;
