const {screenManagementPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger, randomString} = require('../../../Function');

module.exports = router =>
{
    router.get(screenManagementPrefix('/getBasicInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.BASIC_INFO.SCREEN_AMOUNT]: 5,// 总屏幕数
                [NAMESPACE.SCREEN_MANAGEMENT.BASIC_INFO.RUNNING_SCREEN_AMOUNT]: 3,// 运行中屏幕数
                [NAMESPACE.SCREEN_MANAGEMENT.BASIC_INFO.ABNORMAL_EVENT_AMOUNT]: 0,// 异常事件个数
            });
        await next();
    });

    router.get(screenManagementPrefix('/getLogList'), async (ctx, next) =>
    {
        const logList = [];
        logList.push(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.LOG.TIME]: (new Date()).toISOString(),
                [NAMESPACE.SCREEN_MANAGEMENT.LOG.CONTENT]: '添加了屏幕 “食堂一楼”',
            });

        logList.push(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.LOG.TIME]: (new Date()).toISOString(),
                [NAMESPACE.SCREEN_MANAGEMENT.LOG.CONTENT]: '解除了屏幕“食堂二楼”的资源包',
            });

        logList.push(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.LOG.TIME]: (new Date()).toISOString(),
                [NAMESPACE.SCREEN_MANAGEMENT.LOG.CONTENT]: '开启屏幕“综合楼一楼”',
            });

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.LIST.LOG]: logList,
            },
        );
        await next();
    });

    router.get(screenManagementPrefix('/getScreenList'), async (ctx, next) =>
    {
        const screenList = [];

        screenList.push(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.ID]: 1,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.UUID]: randomString(6),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.NAME]: '食堂一楼',
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.IS_RUNNING]: true,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_ID]: randomInteger(0, 20),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_NAME]: '学生周知',
            },
        );
        screenList.push(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.ID]: 2,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.UUID]: randomString(6),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.NAME]: '食堂二楼',
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.IS_RUNNING]: true,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_ID]: randomInteger(0, 20),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_NAME]: '学院新闻',
            },
        );
        screenList.push(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.ID]: 3,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.UUID]: randomString(6),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.NAME]: '综合楼一楼',
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.IS_RUNNING]: false,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_ID]: randomInteger(0, 20),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_NAME]: '国内新闻',
            },
        );
        screenList.push(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.ID]: 4,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.UUID]: randomString(6),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.NAME]: '外语教学部',
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.IS_RUNNING]: true,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_ID]: randomInteger(0, 20),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_NAME]: '国际新闻',
            },
        );
        screenList.push(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.ID]: 5,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.UUID]: randomString(6),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.NAME]: '307 宣传',
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.IS_RUNNING]: false,
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_ID]: randomInteger(0, 20),
                [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_NAME]: '打印广告',
            },
        );

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.LIST.SCREEN]: screenList,
            },
        );
        await next();
    });

    router.post(screenManagementPrefix('/unbindResourcePack'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/addScreen'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/deleteScreen'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/startScreen'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/stopScreen'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/bindResourcePack'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });
};