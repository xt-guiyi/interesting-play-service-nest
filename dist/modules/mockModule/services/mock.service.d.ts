import { JwtService } from '@nestjs/jwt';
export declare class MockService {
    private readonly jwtService;
    private readonly filename;
    constructor(jwtService: JwtService);
    getBanners(): {
        id: number;
        url: string;
        jumpUrl: string;
    }[];
    getUsers(): any;
    getVideoList(page: any, pageSize: any): {
        page: number;
        pageSize: number;
        total: number;
        data: any;
    };
    getVideoDetail(id: any): any;
    getCommentList(page: any, pageSize: any): {
        page: number;
        pageSize: number;
        total: number;
        data: any;
    };
    getDiscoverList(page: any, pageSize: any): {
        page: number;
        pageSize: number;
        total: number;
        data: any;
    };
    register(username: string, password: number): Promise<boolean>;
    login(username: string, password: number): Promise<string>;
}
