const {tagManagementPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger} = require('../../../Function');

module.exports = router =>
{
    router.get(tagManagementPrefix('/getBasicInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse({
            [NAMESPACE.TAG_MANAGEMENT.BASIC_INFO.TAG_AMOUNT]: 5,
            [NAMESPACE.TAG_MANAGEMENT.BASIC_INFO.USING_TAG_AMOUNT]: 4,
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
        tagList.push(
            {
                [NAMESPACE.TAG_MANAGEMENT.TAG.ID]: 1, // Tag 的 ID
                [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: '新闻', // Tag 的名字
                [NAMESPACE.TAG_MANAGEMENT.TAG.BINDING_RESOURCE_PACK_AMOUNT]: randomInteger(0, 20), // Tag 当前绑定了多少个资源包
                [NAMESPACE.TAG_MANAGEMENT.TAG.CREATION_TIME]: randomInteger(Date.now() - 384756834, Date.now()), // Tag 是什么时候创建的
            },
        );
        tagList.push(
            {
                [NAMESPACE.TAG_MANAGEMENT.TAG.ID]: 2, // Tag 的 ID
                [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: '比赛信息', // Tag 的名字
                [NAMESPACE.TAG_MANAGEMENT.TAG.BINDING_RESOURCE_PACK_AMOUNT]: randomInteger(0, 20), // Tag 当前绑定了多少个资源包
                [NAMESPACE.TAG_MANAGEMENT.TAG.CREATION_TIME]: randomInteger(Date.now() - 384756834, Date.now()), // Tag 是什么时候创建的
            },
        );
        tagList.push(
            {
                [NAMESPACE.TAG_MANAGEMENT.TAG.ID]: 3, // Tag 的 ID
                [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: '硬件广告', // Tag 的名字
                [NAMESPACE.TAG_MANAGEMENT.TAG.BINDING_RESOURCE_PACK_AMOUNT]: randomInteger(0, 20), // Tag 当前绑定了多少个资源包
                [NAMESPACE.TAG_MANAGEMENT.TAG.CREATION_TIME]: randomInteger(Date.now() - 384756834, Date.now()), // Tag 是什么时候创建的
            },
        );
        tagList.push(
            {
                [NAMESPACE.TAG_MANAGEMENT.TAG.ID]: 4, // Tag 的 ID
                [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: '软件广告', // Tag 的名字
                [NAMESPACE.TAG_MANAGEMENT.TAG.BINDING_RESOURCE_PACK_AMOUNT]: randomInteger(0, 20), // Tag 当前绑定了多少个资源包
                [NAMESPACE.TAG_MANAGEMENT.TAG.CREATION_TIME]: randomInteger(Date.now() - 384756834, Date.now()), // Tag 是什么时候创建的
            },
        );
        tagList.push(
            {
                [NAMESPACE.TAG_MANAGEMENT.TAG.ID]: 5, // Tag 的 ID
                [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: '食品广告', // Tag 的名字
                [NAMESPACE.TAG_MANAGEMENT.TAG.BINDING_RESOURCE_PACK_AMOUNT]: randomInteger(0, 20), // Tag 当前绑定了多少个资源包
                [NAMESPACE.TAG_MANAGEMENT.TAG.CREATION_TIME]: randomInteger(Date.now() - 384756834, Date.now()), // Tag 是什么时候创建的
            },
        );

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
        resourcePackNameList.push('Intel');
        resourcePackNameList.push('NVIDIA');
        resourcePackNameList.push('AMD');
        resourcePackNameList.push('ASUS');

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.TAG_MANAGEMENT.TAG.NAME]: '硬件广告', // Tag 的名字
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