import { FirebaseOptions } from "@angular/fire/app";

export interface Environment {
    production: boolean;
    appVerificationDisabledForTesting?: boolean;
    firebaseConfig: FirebaseOptions;
}