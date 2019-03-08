const {resourcePackManagementPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger, randomCharacters, randomString, randomBoolean} = require('../../../Function');

module.exports = router =>
{
    router.get(resourcePackManagementPrefix('/getBasicInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse({
            [NAMESPACE.RESOURCE_PACK_MANAGEMENT.BASIC_INFO.RESOURCE_PACK_AMOUNT]: 4, // 总资源包个数
            [NAMESPACE.RESOURCE_PACK_MANAGEMENT.BASIC_INFO.USING_RESOURCE_PACK_AMOUNT]: 4, // 正在使用的资源包个数
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
        resourcePackList.push(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ID]: 1,// 资源包 ID
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.NAME]: 'Intel',// 资源包名
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.TAG_NAME]: '硬件广告',// 绑定标签名
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ADVERTISEMENT_AMOUNT]: randomInteger(10, 30),// 内含广告数量
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.SCREEN_AMOUNT]: randomInteger(1, 3),// 绑定屏幕数量
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.DESCRIPTION]: '于 9 日添加酷睿 9 代内容',// 资源包备注
            },
        );
        resourcePackList.push(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ID]: 2,// 资源包 ID
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.NAME]: 'NVIDIA',// 资源包名
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.TAG_NAME]: '硬件广告',// 绑定标签名
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ADVERTISEMENT_AMOUNT]: randomInteger(10, 30),// 内含广告数量
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.SCREEN_AMOUNT]: randomInteger(1, 3),// 绑定屏幕数量
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.DESCRIPTION]: '',// 资源包备注
            },
        );
        resourcePackList.push(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ID]: 3,// 资源包 ID
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.NAME]: 'ASUS',// 资源包名
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.TAG_NAME]: '硬件广告',// 绑定标签名
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ADVERTISEMENT_AMOUNT]: randomInteger(10, 30),// 内含广告数量
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.SCREEN_AMOUNT]: randomInteger(1, 3),// 绑定屏幕数量
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.DESCRIPTION]: '',// 资源包备注
            },
        );
        resourcePackList.push(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ID]: 4,// 资源包 ID
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.NAME]: 'AMD',// 资源包名
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.TAG_NAME]: '硬件广告',// 绑定标签名
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ADVERTISEMENT_AMOUNT]: randomInteger(10, 30),// 内含广告数量
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.SCREEN_AMOUNT]: randomInteger(1, 3),// 绑定屏幕数量
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.DESCRIPTION]: '',// 资源包备注
            },
        );

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.LIST.RESOURCE_PACK]: resourcePackList,
            },
        );
        await next();
    });

    router.get(resourcePackManagementPrefix('/getResourcePackTagList'), async (ctx, next) =>
    {
        const tagList = [];
        const listLength = randomInteger(10, 20);
        for (let i = 0; i < listLength; i++)
        {
            tagList.push(
                {
                    [NAMESPACE.TAG_MANAGEMENT.TAG.ID]: i + 1, // Tag 的 ID
                    [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: randomString(randomInteger(1, 6)), // Tag 的名字
                    [NAMESPACE.TAG_MANAGEMENT.TAG.BINDING_RESOURCE_PACK_AMOUNT]: randomInteger(0, 20), // Tag 当前绑定了多少个资源包
                    [NAMESPACE.TAG_MANAGEMENT.TAG.CREATION_TIME]: randomInteger(Date.now() - 384756834, Date.now()), // Tag 是什么时候创建的
                },
            );
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.TAG_MANAGEMENT.LIST.TAG]: tagList,
            },
        );
        await next();
    });

    router.get(resourcePackManagementPrefix('/getResourcePackAdvertisementList'), async (ctx, next) =>
    {
        const advertisementList = [];
        const listLength = randomInteger(10, 20);
        for (let i = 0; i < listLength; i++)
        {
            advertisementList.push({
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: i + 1, // 广告的 ID
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: randomInteger(0, 1), // 广告类型，枚举值
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: randomString(10), // 文件名
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'https://static.soulike.tech/userImage/1545187128767.webp', // 预览 URL
            });
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.LIST.ADVERTISEMENT]: advertisementList,
            },
        );
        await next();
    });

    router.get(resourcePackManagementPrefix('/getResourcePackScreenList'), async (ctx, next) =>
    {
        const screenList = [];
        const screenLength = randomInteger(0, 50);
        for (let i = 0; i < screenLength; i++)
        {
            screenList.push(
                {
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.ID]: i + 1,
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.UUID]: randomString(6),
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.NAME]: randomCharacters(4),
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.IS_RUNNING]: randomBoolean(),
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_ID]: randomInteger(0, 20),
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_NAME]: randomCharacters(6),
                },
            );
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.LIST.SCREEN]: screenList,
            },
        );
        await next();
    });

    router.get(resourcePackManagementPrefix('/getResourcePackUnbindingTagList'), async (ctx, next) =>
    {
        const tagList = [];
        const listLength = randomInteger(0, 50);
        for (let i = 0; i < listLength; i++)
        {
            tagList.push(
                {
                    [NAMESPACE.TAG_MANAGEMENT.TAG.ID]: i + 51, // Tag 的 ID
                    [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: randomString(randomInteger(1, 6)), // Tag 的名字
                    [NAMESPACE.TAG_MANAGEMENT.TAG.BINDING_RESOURCE_PACK_AMOUNT]: randomInteger(0, 20), // Tag 当前绑定了多少个资源包
                    [NAMESPACE.TAG_MANAGEMENT.TAG.CREATION_TIME]: randomInteger(Date.now() - 384756834, Date.now()), // Tag 是什么时候创建的
                },
            );
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.TAG_MANAGEMENT.LIST.TAG]: tagList,
            },
        );
        await next();
    });

    router.get(resourcePackManagementPrefix('/getResourcePackUnbindingAdvertisementList'), async (ctx, next) =>
    {
        const advertisementList = [];
        const listLength = randomInteger(0, 300);
        for (let i = 0; i < listLength; i++)
        {
            advertisementList.push({
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: i + 51, // 广告的 ID
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: randomInteger(0, 1), // 广告类型，枚举值
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: randomString(10), // 文件名
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'https://static.soulike.tech/userImage/1545187128767.webp', // 预览 URL
            });
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.LIST.ADVERTISEMENT]: advertisementList,
            },
        );
        await next();
    });

    router.post(resourcePackManagementPrefix('/changeResourcePackInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });
};