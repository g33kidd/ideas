Meteor.startup(function() {

    Accounts.loginServiceConfiguration.remove({ service: 'twitter' });
    Accounts.loginServiceConfiguration.insert({
        service: 'twitter',
        consumerKey: '', // oauth stuff here
        secret: '' // oauth stuff here
    });

});