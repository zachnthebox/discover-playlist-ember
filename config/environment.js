/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'disovery-playlist-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
      },
      FEATURES: { }
    },
    firebase: {
      apiKey: "AIzaSyBtfrrxZ21tzuuQIJp7ymV7KUaJDnOhKGI",
      authDomain: "discovery-weekly.firebaseapp.com",
      databaseURL: "https://discovery-weekly.firebaseio.com",
      storageBucket: "discovery-weekly.appspot.com",
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
