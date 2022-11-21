import * as admin from 'firebase-admin';
const projectId = 'coscore';
process.env.GCLOUD_PROJECT = projectId;
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
admin.initializeApp({ projectId });

(global as any).projectId = 'coscore';
