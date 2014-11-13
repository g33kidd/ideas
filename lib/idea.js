ideaCommentCount = function(ideaId) {
	return Comments.find({ideaId: ideaId}).count();
}