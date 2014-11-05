UI.registerHelper('isWatching', function() {
    if(isWatching(this._id))
        return true;
    return false;
});