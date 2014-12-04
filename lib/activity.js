SHARE_ACTION = 1;
JOIN_ACTION = 2;
WATCH_ACTION = 3;
UNWATCH_ACTION = 4;
COMMENT_ACTION = 5;
CONTRIBUTE_ACTION = 6;

trackActivity = function(action, user, doc) {
    var activity = {
        userId: user,
        docId: doc,
        action: action
    };

    Meteor.call('track', activity, function(error, result) {
        if(error)
            return alert(error.reason);
    });
}

activityStringParts = function(activity) {
    var user = Meteor.users.findOne(activity.userId);
    var action = "";
    if(activity.docId !== null) {
        var doc = Ideas.findOne(activity.docId);
    }

    var display = user.username;
    var doc = (activity.docId === null) ? null : doc._id;

    if(activity.action === SHARE_ACTION)
        action = "shared";

    if(activity.action === JOIN_ACTION)
        action = "joined";

    if(activity.action === WATCH_ACTION)
        action = "watching";

    if(activity.action === UNWATCH_ACTION)
        action = "unwatched";

    if(activity.action === COMMENT_ACTION)
        action = "commented";

    if(activity.action === CONTRIBUTE_ACTION)
        action = "joined";

    return {
        _id: activity._id,
        userId: user._id,
        userDisplay: display,
        docId: doc,
        docDisplay: doc.title,
        action: action
    };
}

activityString = function(activity) {
    var user = Meteor.users.findOne({_id: activity.userId});

    if(activity.docId !== null) {
        var doc = Ideas.findOne(activity.docId);
    }

    var string = "";
    var display = user.username;
    
    if(activity.action === SHARE_ACTION) {
        string = display + " shared " + doc.title;
    }else if(activity.action === JOIN_ACTION) {
        string = display + " joined";
    }else if(activity.action === WATCH_ACTION) {
        string = display + " is watching " + doc.title;
    }else if(activity.action === UNWATCH_ACTION) {
        string = display + " unwatched " + doc.title;
    }else if(activity.action === COMMENT_ACTION) {
        string = display + " commented on " + doc.title;
    }else if(activity.action === CONTRIBUTE_ACTION) {
        string = display + " joined " + doc.title;
    }

    return string + " " + moment(activity.created).fromNow();
}