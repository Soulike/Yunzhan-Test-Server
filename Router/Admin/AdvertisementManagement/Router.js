const {advertisementManagementPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger, randomString} = require('../../../Function');
const multer = require('koa-multer');

const upload = multer({dest: '/tmp/'});

module.exports = router =>
{
    router.get(advertisementManagementPrefix('/getBasicInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.BASIC_INFO.ADVERTISEMENT_AMOUNT]: randomInteger(20, 30),// 总广告数
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.BASIC_INFO.IMAGE_AMOUNT]: randomInteger(10, 20),// 图片形式的广告数
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.BASIC_INFO.ADVERTISEMENT_FILE_SIZE]: randomInteger(50000000, 100000000),// 广告占用空间大小
            },
        );
        await next();
    });

    router.post(advertisementManagementPrefix('/uploadVideo'), upload.fields([
        {
            name: NAMESPACE.ADVERTISEMENT_MANAGEMENT.VIDEO.NAME,
            maxCount: 1,
        },
        {
            name: NAMESPACE.ADVERTISEMENT_MANAGEMENT.VIDEO.FILE,
            maxCount: 1,
        }],
    ), async (ctx, next) =>
    {
        console.log(ctx.req.body);
        console.log(ctx.req.files);
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(advertisementManagementPrefix('/uploadImage'), upload.fields([
        {
            name: NAMESPACE.ADVERTISEMENT_MANAGEMENT.IMAGE.NAME,
            maxCount: 1,
        },
        {
            name: NAMESPACE.ADVERTISEMENT_MANAGEMENT.IMAGE.FILE,
            maxCount: 1,
        },
        {
            name: NAMESPACE.ADVERTISEMENT_MANAGEMENT.IMAGE.QR_CODE_URL,
            maxCount: 1,
        },
        {
            name: NAMESPACE.ADVERTISEMENT_MANAGEMENT.IMAGE.QR_CODE_POSITION,
            maxCount: 1,
        }],
    ), async (ctx, next) =>
    {
        console.log(ctx.req.body);
        console.log(ctx.req.files);
        ctx.body = new SuccessResponse();
        await next();
    });

    router.get(advertisementManagementPrefix('/getAdvertisementList'), async (ctx, next) =>
    {
        const advertisementList = [];
        const listLength = randomInteger(50, 300);
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
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.LIST.ADVERTISEMENT]: advertisementList,
            },
        );
        await next();
    });

    router.get(advertisementManagementPrefix('/getAdvertisementInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: randomInteger(0, 1), // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: randomString(10), // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.IMAGE.QR_CODE_URL]: `https://${randomString()}.com`, // 二维码 URL
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.IMAGE.QR_CODE_POSITION]: randomInteger(1, 4), // 二维码位置
        });
        await next();
    });

    router.post(advertisementManagementPrefix('/updateAdvertisementInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

};