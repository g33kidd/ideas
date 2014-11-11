Meteor.publish('ideas', function() {
    return Ideas.find();
});

Meteor.publish('activity', function() {
    return Activity.find({}, {
        sort: { created: -1 },
        limit: 20
    });
});

Meteor.publish('comments', function(ideaId) {
    check(ideaId, String);
    return Comments.find({ideaId: ideaId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});