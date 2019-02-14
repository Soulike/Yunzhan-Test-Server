const {removeSlashes} = require('../../../Function');
const {adminPrefix} = require('../Function');

module.exports = {
    overviewPrefix,
};

function overviewPrefix(url)
{
    url = removeSlashes(url);
    return adminPrefix(`/overview/${url}`);
}