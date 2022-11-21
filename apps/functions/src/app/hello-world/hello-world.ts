// import { getAuth } from "firebase-admin/auth";
// import { getFirestore } from "firebase-admin/firestore";
import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  // await getAuth().createUser({uid: 'test', email: 'hej@hej.dk'});
  // await getFirestore().collection('hej').add({ ehuheue: 'hahah' });

  response.send("Hello from Firebase!");
});