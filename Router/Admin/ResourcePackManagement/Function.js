const {removeSlashes} = require('../../../Function');
const {adminPrefix} = require('../Function');

module.exports = {
    resourcePackManagementPrefix,
};

function resourcePackManagementPrefix(url)
{
    url = removeSlashes(url);
    return adminPrefix(`/resourcePackManagement/${url}`);
}