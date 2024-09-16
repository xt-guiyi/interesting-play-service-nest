import { MockService } from 'modules/mockModule/services/mock.service';
export declare class CommonController {
    private readonly mockService;
    constructor(mockService: MockService);
    getBanners(): {
        id: number;
        url: string;
        jumpUrl: string;
    }[];
    getUsers(): any;
    getVideoList(page: number, pageSize: number): {
        page: any;
        pageSize: any;
        total: any;
        data: any;
    };
    getVideoDetail(id: number): any;
    getCommentList(page: number, pageSize: number): {
        page: any;
        pageSize: any;
        total: any;
        data: any;
    };
}
