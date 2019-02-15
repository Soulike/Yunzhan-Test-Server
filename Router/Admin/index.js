module.exports = router =>
{
    require('./Overview')(router);
    require('./ScreenManagement')(router);
    require('./AdvertisementManagement')(router);
};