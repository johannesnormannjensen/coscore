import { firestore } from 'firebase-admin';
import { UserRecord } from 'firebase-admin/auth';
import { auth, EventContext } from 'firebase-functions';

export const authOnCreate = auth.user().onCreate(async (user: UserRecord, res: EventContext<Record<string, string>>) => {
  await firestore().collection('user').doc(user.uid).create(user.toJSON());
});