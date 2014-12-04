Meteor.startup(function() {

    Accounts.loginServiceConfiguration.remove({ service: 'twitter' });
    Accounts.loginServiceConfiguration.insert({
        service: 'twitter',
        consumerKey: 'WyNUEFmZB2wHSvlU0vjfjjvpB', // oauth stuff here
        secret: 'V8fXmPkI3Q39I64vL4xEWpztw2VJBl8AH36TvmzrjDz0JeJUH1' // oauth stuff here
    });

});

Kadira.connect('qp2TNQXxGPXhNjidi', '9ea92beb-afdc-4e6c-82f0-bf5547a0549f')