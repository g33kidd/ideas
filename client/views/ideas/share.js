Template.share.events({

    'click #submit': function(e) {
        e.preventDefault();
        var idea = {
            title: $('#title').val(),
            description: $('#description').val()
        };

        Meteor.call('post', idea, function(error, result) {
            if(error)
                return alert(error.reason);
            var msg = "shared";
            trackAction(Meteor.userId(), result._id, msg);
            Router.go('idea', {_id: result._id});
        });
    }

});