const {removeSlashes, prefix} = require('../../Function');

module.exports = {
    accountPrefix,
};

function accountPrefix(url)
{
    url = removeSlashes(url);
    return prefix(`/account/${url}`);
}