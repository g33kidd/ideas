Comments = new Mongo.Collection('comments');

Meteor.methods({

	comment: function(commentAttr) {
		check(commentAttr, {
			content: String
		});

		var comment = _.extend(commentAttr, {
			userId: Meteor.userId(),
			created: new Date()
		});

		var inserted = Comments.insert(comment);
		return { _id: inserted._id };
	},

	removeComment: function(commentId) {
		Comments.remove({_id: commentId}, function(error) {
			if(error)
				return error.reason;
		});
	}

});