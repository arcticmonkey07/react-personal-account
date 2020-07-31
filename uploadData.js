const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

const databaseURL = "https://react-personal-account.firebaseio.com"

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore('users.json');