Comments = new Mongo.Collection('comments');

Meteor.methods({

	addComment: function(commentAttr) {
		check(commentAttr, {
			body: String
		});

		var comment = _.extend(commentAttr, {
			userId: Meteor.userId(),
			created: new Date()
		});

		var inserted = Comments.insert(comment);
		return { _id: inserted._id };
	}

});