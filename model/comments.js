Comments = new Mongo.Collection('comments');

Meteor.methods({

	addComment: function(commentAttr) {
		// check(commentAttr, {
		// 	body: String,
		// 	ideaId: String
		// });

		var user = Meteor.user();
		var author = (typeof user.profile === 'undefined') ? user.username : user.profile.name;
		var comment = _.extend(commentAttr, {
			userId: user._id,
			author: author,
			created: new Date()
		});

		var inserted = Comments.insert(comment);
		createCommentNotification(comment);
		return { _id: inserted._id };
	}

});