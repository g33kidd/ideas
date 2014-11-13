Template.profile.helpers({

    score: function() {
        return userContributionScore(this._id);
    },

    scorePercent: function() {
        return userContributionScore(this._id) * 10.0;
    }

});