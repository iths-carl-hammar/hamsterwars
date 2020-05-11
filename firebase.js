var admin = require("firebase-admin");

var serviceAccount = require("./kalle.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hamsterwars1.firebaseio.com"
});