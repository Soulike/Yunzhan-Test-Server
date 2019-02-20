const {removeSlashes} = require('../../../Function');
const {adminPrefix} = require('../Function');

module.exports = {
    tagManagementPrefix,
};

function tagManagementPrefix(url)
{
    url = removeSlashes(url);
    return adminPrefix(`/tagManagement/${url}`);
}