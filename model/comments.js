Comments = new Mongo.Collection('comments');

Meteor.methods({

	addComment: function(commentAttr) {
		var user = Meteor.user();
		var author = (typeof user.profile === 'undefined') ? user.username : user.profile.name;
		var comment = _.extend(commentAttr, {
			userId: user._id,
			author: author,
			created: new Date()
		});

		var inserted = Comments.insert(comment);
		createCommentNotification(comment);
		trackActivity(COMMENT_ACTION, Meteor.userId(), commentAttr.ideaId);
		return { _id: inserted._id };
	}

});