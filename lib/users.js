userIdeas = function(userId) {
	return Ideas.find({userId: userId});
}

userCommentCount = function(userId) {
	return Comments.find({userId: userId}).count();
}

userWatchCount = function(userId) {
	return Ideas.find({watchers: userId}).count();
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
	var watchCount = userWatchCount(userId);
	var ideaCommentsTotal = userIdeaCommentCount(userId);
	var ideaWatchersTotal = userIdeaWatcherCount(userId);

	var defScore = commentCount + ideaCount + watchCount + ideaCommentsTotal + ideaWatchersTotal;
	var finalScore = defScore / 10;

	if(finalScore > 10) {
		var finalScore = 10;
	}

	return finalScore;
}

getUserName = function(user) {
	try {
		if(user.username)
			return user.username;

		if(user && user.services && user.services.twitter && user.services.twitter.screenName)
			return user.services.twitter.screenName;
	}catch(error) {
		console.log(error.reason);
		return error;
	}
}

getDisplayName = function(user) {
	if(user.profile && user.profile.name)
		return user.profile.name;
}