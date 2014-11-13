Router.map(function() {

    this.route('home', {
        path: '/',
        waitOn: function() {
            return [Meteor.subscribe('ideas'), Meteor.subscribe('activity')];
        }
    });

    this.route('share', {
        path: '/share'
    });

    this.route('browse', {
        path: '/browse'
    });

    this.route('idea', {
        path: '/idea/:_id',
        waitOn: function() {
            return Meteor.subscribe('comments', this.params._id);
        },
        data: function() {
            return Ideas.findOne({_id: this.params._id});
        }
    });

    this.route('profile', {
        path: '/user/:username',
        data: function() {
            return Meteor.users.findOne({username: this.params.username});
        }
    })

});