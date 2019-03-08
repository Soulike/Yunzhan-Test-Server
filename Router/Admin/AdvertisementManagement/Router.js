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
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.BASIC_INFO.ADVERTISEMENT_AMOUNT]: 10,// 总广告数
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.BASIC_INFO.IMAGE_AMOUNT]: 10,// 图片形式的广告数
                [NAMESPACE.ADVERTISEMENT_MANAGEMENT.BASIC_INFO.ADVERTISEMENT_FILE_SIZE]: 20 * 1024 * 1024,// 广告占用空间大小
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

        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 1, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 2, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 3, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 4, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 5, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 6, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 7, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 8, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 9, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });
        advertisementList.push({
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.ID]: 10, // 广告的 ID
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.URL]: 'http://m.360buyimg.com/mobilecms/s1000x707_jfs/t4945/65/1077318118/98250/75334f2e/58ec57dcNc4c2e234.jpg!q70.jpg', // 预览 URL
        });

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
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.TYPE]: 0, // 广告类型，枚举值
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.ADVERTISEMENT.NAME]: '科技', // 文件名
            [NAMESPACE.ADVERTISEMENT_MANAGEMENT.IMAGE.QR_CODE_URL]: `http://www.dajiangsai.org`, // 二维码 URL
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