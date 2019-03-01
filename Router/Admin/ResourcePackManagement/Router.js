const {resourcePackManagementPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger, randomCharacters} = require('../../../Function');

module.exports = router =>
{
    router.get(resourcePackManagementPrefix('/getBasicInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse({
            [NAMESPACE.RESOURCE_PACK_MANAGEMENT.BASIC_INFO.RESOURCE_PACK_AMOUNT]: randomInteger(30, 50), // 总资源包个数
            [NAMESPACE.RESOURCE_PACK_MANAGEMENT.BASIC_INFO.USING_RESOURCE_PACK_AMOUNT]: randomInteger(0, 30), // 正在使用的资源包个数
        });
        await next();
    });

    router.post(resourcePackManagementPrefix('/submitNewResourcePack'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.get(resourcePackManagementPrefix('/getResourcePackList'), async (ctx, next) =>
    {
        const resourcePackList = [];
        const resourcePackListLength = randomInteger(0, 50);
        for (let i = 0; i < resourcePackListLength; i++)
        {
            resourcePackList.push(
                {
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ID]: i,// 资源包 ID
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.NAME]: randomCharacters(5),// 资源包名
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.TAG_NAME]: randomCharacters(5),// 绑定标签名
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ADVERTISEMENT_AMOUNT]: randomInteger(10, 30),// 内含广告数量
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.SCREEN_AMOUNT]: randomInteger(10, 30),// 绑定屏幕数量
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.DESCRIPTION]: randomCharacters(30),// 资源包备注
                },
            );
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.LIST.RESOURCE_PACK]: resourcePackList,
            },
        );
        await next();
    });
};