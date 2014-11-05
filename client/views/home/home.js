Template.home.helpers({
    activity: function() {
        return Activity.find({}, {limit: 20, sort: {created: -1}});
    }
});

Template.activityItem.helpers({
    activityString: function() {
        var user = Meteor.users.findOne(this.userId);
        var message = this.message;
        var display = this.display;
        var time = moment(this.created).fromNow();
        if(this.docId === 'none' || typeof this.docId === 'undefined') {
            return "<i>" + display + "</i> <b>" + message + "</b> " + time;
        }else {
            var doc = Ideas.findOne(this.docId);
            return "<i>" + display + "</i> <b>" + message + "</b> <a href='/idea/" + doc._id + "'>" + doc.title + "</a> " + time;
        }
    }
});