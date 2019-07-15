const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .get((req, res, next) => {
    res.end("Will send all promotions");
  })
  .post((req, res, next) => {
    res.end(
      `Will add the promocode: ${req.body.promocode} with details ${
        req.body.details
      }`
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported`);
  })
  .delete((req, res, next) => {
    res.end(`Removing all the promo`);
  });

promoRouter
  .route("/:promoId")
  .get((req, res, next) => {
    res.end(`Getting the promo of promoid ${req.params.promoId}`);
  })
  .post((req, res, next) => {
    res.end("Hello");
  })
  .put((req, res, next) => {
    res.end(
      `Updating promo with promocode ${req.body.promocode} and details ${
        req.body.details
      }`
    );
  })
  .delete((req, res, next) => {
    res.end(
      `Deleting promo ${req.body.promocode} of id: ${req.params.promoId}`
    );
  });

module.exports = promoRouter;
