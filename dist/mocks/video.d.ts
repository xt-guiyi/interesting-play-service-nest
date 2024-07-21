declare function getPaginatedVideos(page: any, pageSize: any): {
    page: any;
    pageSize: any;
    total: any;
    data: any;
};
declare function videoDetail(id: any): any;
export { getPaginatedVideos, videoDetail };
