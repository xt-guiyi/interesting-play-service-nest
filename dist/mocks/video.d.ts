declare function getPaginatedVideos(page: any, pageSize: any): {
    page: number;
    pageSize: number;
    total: number;
    data: any;
};
declare function videoDetail(id: any): any;
export { getPaginatedVideos, videoDetail };
