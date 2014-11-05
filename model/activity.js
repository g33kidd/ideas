Activity = new Mongo.Collection('activity');

Meteor.methods({
    
    track: function(activity) {
        var activity = _.extend(activity, {
            created: new Date()
        });

        var activityId = Activity.insert(activity);
        return { _id: activityId };
    }

});