Router.configure({

    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [Meteor.subscribe('ideas'), Meteor.subscribe('notifications')];
    }

});