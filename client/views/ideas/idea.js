Template.idea.helpers({
    watchers: function() {
        if(Array.isArray(this.watchers)) {
            return Meteor.users.find({_id: {$in: this.watchers}});
        }
    },

    isWatching: function() {
        return ($.inArray(Meteor.userId(), this.watchers) === -1) ? false : true;
    },

    watchersCount: function() {
        return this.watchers.count();
    },

    comments: function() {
        return Comments.find({ideaId: this._id});
    }
});

Template.idea.events({
    'click .watchThis': function(e) {
        var currentPostId = this._id;
        Meteor.call('watch', currentPostId);
    },

    'click .unwatchThis': function(e) {
        var currentPostId = this._id;
        Meteor.call('unwatch', currentPostId);
    },

    'click #postComment': function(e, template) {
        var $body = $('#body');
        var comment = {
            body: $body.val(),
            ideaId: template.data._id
        }

        Meteor.call('addComment', comment, function(error, commentId) {
            $body.val('');
        });
    }
});