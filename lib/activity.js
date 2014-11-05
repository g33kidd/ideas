trackAction = function(user, display, message, doc) {

    var activity = {
        userId: user,
        docId: doc,
        display: display,
        message: message
    };

    Meteor.call('track', activity, function(error, result) {
        if(error)
            return alert(error.reason);
        console.log(result._id);
    });
}