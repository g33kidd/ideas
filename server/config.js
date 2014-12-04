Accounts.onCreateUser(function(options, user) {
    var msg = "joined";

    if(!options.username)
    	options.username = user.services.twitter.screenName;
    user.username = options.username;

    trackActivity(JOIN_ACTION, user._id, null);
    return user;
});