import { firestore } from 'firebase-admin';
import firebaseFunctionsTest from 'firebase-functions-test';
import { TestUtils } from "../../test/utils";
import { authOnCreate as _authOnCreate } from './on-create';

const { wrap, auth } = firebaseFunctionsTest();


describe('Auth', () => {

    describe('OnCreate', () => {

        beforeEach(async () => {
            const testEnv = await TestUtils.initTestEnvironment();
            await testEnv.clearFirestore();
        });

        it('save user info to firestore /document/user/{uid}', async () => {

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