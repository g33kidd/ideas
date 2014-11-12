Accounts.onCreateUser(function(options, user) {
    var msg = "joined";

    if(!options.username)
    	options.username = user.services.twitter.screenName;
    user.username = options.username;

    trackAction(user._id, user.username, msg, 'none');
    return user;
});