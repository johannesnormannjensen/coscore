import { firestore } from 'firebase-admin';
import firebaseFunctionsTest from 'firebase-functions-test';
import { TestUtils } from "../../test/utils";
import { userOnCreate as _authOnCreate } from './on-create';

const { wrap, auth } = firebaseFunctionsTest();


describe('User', () => {

    describe('OnCreate', () => {

        beforeEach(async () => {
            const testEnv = await TestUtils.initTestEnvironment();
            testEnv.clearFirestore();
        });

        it('saves user info to firestore /document/user/{uid}', async () => {

            const user = auth.exampleUserRecord();
            const authOnCreate = wrap(_authOnCreate);

            const timestamp = new Date();
            await authOnCreate(user, { timestamp: timestamp.toISOString() });

            const snapshot = await firestore().collection('user').doc(user.uid).get();

            expect(snapshot.id).toBe(user.uid);
            expect(snapshot.exists).toBeTruthy();
            expect(snapshot.data()).toEqual(user.toJSON());

        });

    });
});