import * as admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';

admin.initializeApp({ credential: applicationDefault() });

export { authOnCreate } from './app/auth';
export { helloWorld } from './app/hello-world';

