var firebase = require("firebase-admin");

var serviceAccount = require(__dirname+"/private/cre.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app"
});