Ideas = new Mongo.Collection('ideas');

Meteor.methods({

    post: function(ideaAttrs) {
        check(ideaAttrs, {
            title: String,
            description: String
        });

        var idea = _.extend(ideaAttrs, {
            userId: Meteor.userId(),
            created: new Date()
        });

        var ideaId = Ideas.insert(idea);
        trackActivity(SHARE_ACTION, Meteor.userId(), ideaId);
        return { _id: ideaId };
    },

    watch: function(ideaId) {
        Ideas.update(ideaId, {$addToSet: {watchers: Meteor.userId()}});
        trackActivity(WATCH_ACTION, Meteor.userId(), ideaId);
    },

    unwatch: function(ideaId) {
        Ideas.update(ideaId, {$pull: {watchers: Meteor.userId()}});
        trackActivity(UNWATCH_ACTION, Meteor.userId(), ideaId);
    }

});