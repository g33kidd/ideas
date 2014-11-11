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
        return { _id: ideaId };
    },

    watch: function(ideaId) {
        Ideas.update(ideaId, {$addToSet: {watchers: Meteor.userId()}});
    },

    unwatch: function(ideaId) {
        Ideas.update(ideaId, {$pull: {watchers: Meteor.userId()}});
        // Ideas.update(ideaId. {$pull: {watchers: Meteor.userId()}});
    }

});