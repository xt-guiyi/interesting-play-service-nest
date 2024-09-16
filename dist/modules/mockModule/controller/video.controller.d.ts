import { VideoService } from "modules/mockModule/services/video.service";
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    getVideoList(page: number, pageSize: number): any;
    getVideoDetail(id: number): any;
}
