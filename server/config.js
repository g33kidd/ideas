Accounts.onCreateUser(function(options, user) {
    var msg = "joined";
    trackAction(user._id, user.emails[0].address, msg, 'none');
    return user;
});