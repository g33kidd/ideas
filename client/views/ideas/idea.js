Template.idea.helpers({

    watchers: function() {
        if(Array.isArray(this.watchers)) {
            console.log(Meteor.users.find({_id: {$in: this.watchers}}));
            return Meteor.users.find({_id: {$in: this.watchers}});
        }
    }

});

Template.idea.events({

    'click .watchThis': function(e) {
        var currentPostId = this._id;
        Meteor.call('watch', currentPostId);
    }

});