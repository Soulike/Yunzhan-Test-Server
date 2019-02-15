const {removeSlashes} = require('../../../Function');
const {adminPrefix} = require('../Function');

module.exports = {
    advertisementManagementPrefix,
};

function advertisementManagementPrefix(url)
{
    url = removeSlashes(url);
    return adminPrefix(`/advertisementManagement/${url}`);
}