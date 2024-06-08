import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiKey: "AIzaSyArV96xm9rLUQDwkQrjkmH9xNC4_8bVktE",
  authDomain: "games-app-58b2a.firebaseapp.com",
  projectId: "games-app-58b2a",
  storageBucket: "games-app-58b2a.appspot.com",
  messagingSenderId: "874150140716",
  appId: "1:874150140716:web:c0266862d31deae9b56a89",
  measurementId: "G-CDMBBDN0MH"
  };
  const app = initializeApp(environment);
  const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
