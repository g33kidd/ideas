Template.home.helpers({
    activity: function() {
        return Activity.find({}, {limit: 20});
    }
});


Template.activityItem.helpers({
    activityString: function() {
        var user = Meteor.users.findOne(this.userId);
        var message = this.message;
        var doc = Ideas.findOne(this.docId);
        return "<i>" + user.emails[0].address + "</i> <b>" + message + "</b> <a href='/idea/" + doc._id + "'>" + doc.title + "</a>";
    }
});