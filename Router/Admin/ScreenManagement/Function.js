const {removeSlashes} = require('../../../Function');
const {adminPrefix} = require('../Function');

module.exports = {
    screenManagementPrefix,
};

function screenManagementPrefix(url)
{
    url = removeSlashes(url);
    return adminPrefix(`/screenManagement/${url}`);
}