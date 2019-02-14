const {removeSlashes, prefix} = require('../../Function');

module.exports = {
    adminPrefix,
};

function adminPrefix(url)
{
    url = removeSlashes(url);
    return prefix(`/admin/${url}`);
}