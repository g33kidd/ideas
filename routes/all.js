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
        data: function() {
            return Ideas.findOne({_id: this.params._id});
        }
    });

});