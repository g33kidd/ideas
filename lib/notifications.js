createCommentNotification = function(comment) {
    var idea = Ideas.findOne(comment.ideaId);
    var watchers = idea.watchers;
    if(comment.userId !== idea.userId) {
        if(watchers.length > 0) {
            watchers.forEach(function (watcher) {
                Notifications.insert({
                    userId: watcher,
                    ideaId: idea._id,
                    commentId: comment._id,
                    commenterName: comment.author,
                    read: false
                });     
            });
        }

        Notifications.insert({
            userId: idea.userId,
            postId: post._id,
            commentId: comment._id,
            commenterName: comment.author,
            read: false
        });
    }
}