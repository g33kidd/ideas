Template.home.helpers({
    activity: function() {
        return Activity.find({}, {limit: 10, sort: {created: -1}});
    },

    ideas: function() {
        return Ideas.find({}, {limit:4, sort: {created: -1}});
    }
});

Template.activityItem.helpers({
    activityString: function() {
        return activityString(this);
    }
    
    // activityString: function() {
    //     var user = Meteor.users.findOne(this.userId);
    //     var message = this.message;
    //     var display = this.display;
    //     var time = moment(this.created).fromNow();
    //     if(this.docId === 'none' || typeof this.docId === 'undefined') {
    //         return "<i>" + display + "</i> <b>" + message + "</b> " + time;
    //     }else {
    //         var doc = Ideas.findOne(this.docId);
    //         return "<i>" + display + "</i> <b>" + message + "</b> <a href='/idea/" + doc._id + "'>" + doc.title + "</a> " + time;
    //     }
    // }
});

Template.ideaItem.helpers({
    created: function() {
        return moment(this.created).fromNow();
    },
    commentCount: function() {
        Meteor.subscribe('comments', this._id);
        var count = Comments.find({ideaId: this._id}).count();
        var append = "comment";
        if(count < 1 || count > 1) {
            append = "comments";
        }else{
            append = "comment";
        }
        return count + " " + append;
    },
    userProfileImage: function() {
        var user = Meteor.users.findOne(this.userId);
        if(user) {
            return user.services.twitter.profile_image_url;
        }
    },
    isWatching: function() {
        return ($.inArray(Meteor.userId(), this.watchers) === -1) ? false : true;
    }
})

Template.ideaItem.events({
    'click .idea-card': function(e, tmpl) {
        Router.go('idea', {_id: tmpl.data._id});
    },

    'click .watch-this': function(e, tmpl) {
        var currentIdea = tmpl.data._id;
        Meteor.call('watch', currentIdea);
    },

    'click .unwatch-this': function(e, tmpl) {
        var currentIdea = tmpl.data._id;
        Meteor.call('unwatch', currentIdea);
    }
})