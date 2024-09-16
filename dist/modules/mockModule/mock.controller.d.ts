import { MockService } from 'modules/mockModule/services/mock.service';
export declare class CommonController {
    private readonly mockService;
    constructor(mockService: MockService);
    getBanners(): any;
    getUsers(): any;
    getVideoList(page: number, pageSize: number): any;
    getVideoDetail(id: number): any;
}
