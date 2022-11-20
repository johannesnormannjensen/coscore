import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//

initializeApp({
  credential: applicationDefault()
});

export const helloWorld = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  await getAuth().createUser({uid: 'test', email: 'hej@hej.dk'});
  await getFirestore().collection('hej').add({ ehuheue: 'hahah' });

  response.send("Hello from Firebase!");
});
