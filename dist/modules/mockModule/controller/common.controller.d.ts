import { CommonService } from "modules/mockModule/services/common.service";
export declare class CommonController {
    private readonly commonService;
    constructor(commonService: CommonService);
    getBanners(): {
        id: number;
        url: string;
        jumpUrl: string;
    }[];
}
