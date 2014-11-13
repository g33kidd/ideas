userIdeas = function(userId) {
	return Ideas.find({userId: userId});
}

userCommentCount = function(userId) {
	return Comments.find({userId: userId}).count();
}

userIdeaCount = function(userId) {
	return userIdeas(userId).count();
}

userIdeaCommentCount = function(userId) {
	var ideas = userIdeas(userId);
	var commentCount = 0;
	if(ideas.count() > 0) {
		ideas.forEach(function (idea) {
			commentCount = commentCount + ideaCommentCount(idea._id);
		});
	}else{
		commentCount = 0;
	}

	return commentCount;
}

userIdeaWatcherCount = function(userId) {
	var ideas = userIdeas(userId);
	var watcherCount = 0;
	if(ideas.count() > 0) {
		ideas.forEach(function (idea) {
			if(idea.watchers && Array.isArray(idea.watchers)) {
				watcherCount = watcherCount + idea.watchers.length;
			}
		});
	}

	return watcherCount;
}

userContributionScore = function(userId) {
	var commentCount = userCommentCount(userId);
	var ideaCount = userIdeaCount(userId);
	var ideaCommentsTotal = userIdeaCommentCount(userId);
	var ideaWatchersTotal = userIdeaWatcherCount(userId);

	finalScore = "Comment Count: " + commentCount + "\nIdea Count: " + ideaCount + "\nTotal Comments: " + ideaCommentsTotal + "\nTotal Watchers: " + ideaWatchersTotal;
	return finalScore;
}

ideaCommentCount = function(ideaId) {
	return Comments.find({ideaId: ideaId}).count();
}