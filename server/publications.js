Meteor.publish('ideas', function() {
    return Ideas.find();
});

Meteor.publish('activity', function() {
    return Activity.find({}, {
        sort: { created: -1 },
        limit: 20
    });
})