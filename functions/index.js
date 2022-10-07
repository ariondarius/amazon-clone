const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
// @ts-ignore
const stripe = require("stripe")(process.env.API_KEY);

//API

//- App config
const app = express();
//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved!>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-3290d/us-central1/api
