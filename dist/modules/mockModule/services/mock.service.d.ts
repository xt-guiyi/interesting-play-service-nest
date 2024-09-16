export declare class MockService {
    getBanners(): {
        id: number;
        url: string;
        jumpUrl: string;
    }[];
    getUsers(): any;
    getVideoList(page: any, pageSize: any): {
        page: any;
        pageSize: any;
        total: any;
        data: any;
    };
    getVideoDetail(id: any): any;
    getCommentList(page: any, pageSize: any): {
        page: any;
        pageSize: any;
        total: any;
        data: any;
    };
}
