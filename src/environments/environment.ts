// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.dfsa

export const environment = {
  production: false,
  // apiBaseLink: 'test',
  // ftpBaseLink: 'test',
  apiBaseLink: 'http://localhost:3001',
  ftpBaseLink: 'http://localhost:3001',
  appBaseUrl: '/',
  userBaseUrl: '/account',
  userLoginUrl: '/login',
  adminLoginUrl: 'admin/login',
  adminBaseUrl: 'admin',
  storageSecret: 'SOFT_2021_IT_1998',
  adminTokenSecret: 'SOFT_ADMIN_1995_&&_SOJOL_dEv',
  userTokenSecret: 'SOFT_ADMIN_1996_&&_SOBUR_dEv',
  apiTokenSecret: 'SOFT_API_1998_&&_SAZIB_dEv',
  sslIpnUrl: 'test',
  firebaseConfig: {
    apiKey: "AIzaSyDctt8rtIvz4t7ebJAtBwFJoFC77qR4ULg",
  authDomain: "dhurobo-ht-enterprice.firebaseapp.com",
  projectId: "dhurobo-ht-enterprice",
  storageBucket: "dhurobo-ht-enterprice.appspot.com",
  messagingSenderId: "328367528760",
  appId: "1:328367528760:web:bed2335bc5d151daf9ffcd"
  },
  VERSION: 5,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
