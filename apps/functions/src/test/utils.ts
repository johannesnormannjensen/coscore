import { initializeTestEnvironment } from "@firebase/rules-unit-testing";

export const TestUtils = {
    initTestEnvironment: async () => await initializeTestEnvironment({ projectId: (global as any).projectId })
}