trackAction = function(user, doc, message) {
    var activity = {
        userId: user,
        docId: doc,
        message: message
    };

    Meteor.call('track', activity, function(error, result) {
        if(error)
            return alert(error.reason);
        console.log(result._id);
    });
}