Template.header.helpers({

    notifications: function() {
        return Notifications.find({userId: Meteor.userId(), read: false})
    }

});