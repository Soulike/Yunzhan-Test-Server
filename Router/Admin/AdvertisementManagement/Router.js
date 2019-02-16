const {advertisementManagementPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger} = require('../../../Function');
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
        }],
    ), async (ctx, next) =>
    {
        console.log(ctx.req.body);
        console.log(ctx.req.files);
        ctx.body = new SuccessResponse();
        await next();
    });
};