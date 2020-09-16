const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HPvebIM4tSV6zUOB2a5x9RSU7dXKhP3RQI15nH9ZvTo3LKG7mtDLvCuF8rLT9BwKEjNWhDwNhdkyPrfYY41kOo800SYkY9Ec5')

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
    console.log('Payment request recieved!!!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
    });

    // OK & created something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// npm install stripe
