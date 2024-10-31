export default class ResponseResult<T> {
    code: number;
    message: string;
    data: T;
    constructor(code: number, message: string, data: T);
}
