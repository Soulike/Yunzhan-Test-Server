/*响应对象，用于响应 HTTP 请求*/

class Response
{
    /*
    * code: 请求状态码，列表见 README.md
    * data：本次请求返回的数据，结构依据需求决定
    * message: 对本次请求处理结果的补充说明
    * 不需要的参数不填以提高网络传输效率
    * */

    constructor(code, data)
    {
        this.code = code;
        this.data = data;
    }
}

// 请求成功响应
class SuccessResponse extends Response
{
    constructor(data)
    {
        super(200, data);
    }
}

// 参数无效响应
class WrongParameterResponse extends Response
{
    constructor()
    {
        super(400);
    }
}

// Session 无效响应
class InvalidSessionResponse extends Response
{
    constructor()
    {
        super(401);
    }
}

// 拒绝响应
class RejectionResponse extends Response
{
    constructor()
    {
        super(403);
    }
}

// 内容不存在响应
class ContentNotFoundResponse extends Response
{
    constructor()
    {
        super(404);
    }
}

// 服务器错误响应
class InternalServerErrorResponse extends Response
{
    constructor()
    {
        super(500);
    }
}


module.exports = {
    SuccessResponse,
    WrongParameterResponse,
    InvalidSessionResponse,
    ContentNotFoundResponse,
    InternalServerErrorResponse,
    RejectionResponse,
};