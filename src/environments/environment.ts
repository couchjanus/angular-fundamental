// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDJt_f-pnDyEqHYO7EjWe0ec6m5GuqweO0',
    authDomain: 'couch-b432d.firebaseapp.com',
    databaseURL: 'https://couch-b432d.firebaseio.com',
    projectId: 'couch-b432d',
    storageBucket: 'couch-b432d.appspot.com',
    messagingSenderId: '484379263113'
  }
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
