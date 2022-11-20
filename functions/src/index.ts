import * as admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';

admin.initializeApp({ credential: applicationDefault() });

export { authOnCreate } from './auth';
export { helloWorld } from './hello-world';

