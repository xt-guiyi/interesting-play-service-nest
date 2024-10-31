import { MockService } from 'modules/mockModule/services/mock.service';
import { CreateUserDto } from '@/dto/createUserDto';
import ResponseResult from '@/model/responseResult';
export declare class CommonController {
    private readonly mockService;
    constructor(mockService: MockService);
    getBanners(): ResponseResult<any>;
    getUsers(): ResponseResult<any>;
    getVideoList(page: number, pageSize: number): ResponseResult<any>;
    getVideoDetail(id: number): ResponseResult<any>;
    getCommentList(page: number, pageSize: number): ResponseResult<any>;
    getDiscoverList(page: number, pageSize: number): ResponseResult<any>;
    getUserInfo(): ResponseResult<any>;
    register(body: CreateUserDto): Promise<ResponseResult<String>>;
    login(body: CreateUserDto): Promise<ResponseResult<String>>;
}
