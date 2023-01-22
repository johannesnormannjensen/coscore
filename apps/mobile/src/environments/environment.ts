import { Environment } from "@coscore/service";
import { firebaseConfig } from "./firebase-config";

export const environment: Environment = {
  production: false,
  appVerificationDisabledForTesting: true,
  firebaseConfig,
};
