Comments = new Mongo.Collection('comments');

Meteor.methods({

	addComment: function(commentAttr) {
		// check(commentAttr, {
		// 	body: String,
		// 	ideaId: String
		// });

		var user = Meteor.user();
		var comment = _.extend(commentAttr, {
			userId: user._id,
			author: user.profile.name,
			created: new Date()
		});

		var inserted = Comments.insert(comment);
		createCommentNotification(comment);
		return { _id: inserted._id };
	}

});