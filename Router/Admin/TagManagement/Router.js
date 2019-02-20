const {tagManagementPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger, randomString} = require('../../../Function');

module.exports = router =>
{
    router.get(tagManagementPrefix('/getBasicInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse({
            [NAMESPACE.TAG_MANAGEMENT.BASIC_INFO.TAG_AMOUNT]: randomInteger(20, 50),
            [NAMESPACE.TAG_MANAGEMENT.BASIC_INFO.USING_TAG_AMOUNT]: randomInteger(0, 20),
        });
        await next();
    });

    router.post(tagManagementPrefix('/submitNewTag'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.get(tagManagementPrefix('/getTagList'), async (ctx, next) =>
    {
        const tagList = [];
        const listLength = randomInteger(0, 50);
        for (let i = 0; i < listLength; i++)
        {
            tagList.push(
                {
                    [NAMESPACE.TAG_MANAGEMENT.TAG.ID]: i + 1, // Tag 的 ID
                    [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: randomString(randomInteger(1, 10)), // Tag 的名字
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

    router.get(tagManagementPrefix('/getTagInfo'), async (ctx, next) =>
    {
        const resourcePackNameList = [];
        const listLength = randomInteger(0, 50);

        for (let i = 0; i < listLength; i++)
        {
            resourcePackNameList.push(randomString(11));
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: randomString(10), // Tag 的名字
                [NAMESPACE.TAG_MANAGEMENT.TAG.CREATION_TIME]: randomInteger(Date.now() - 384756834, Date.now()), // Tag 是什么时候创建的
                [NAMESPACE.TAG_MANAGEMENT.TAG.BINDING_RESOURCE_PACK_NAME_LIST]: resourcePackNameList, // 这个标签绑定的所有的资源包的名字字符串数组
            },
        );
        await next();
    });

    router.post(tagManagementPrefix('/changeTagInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });
};