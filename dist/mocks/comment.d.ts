declare function getPaginatedComments(page: any, pageSize: any): {
    page: number;
    pageSize: number;
    total: number;
    data: any;
};
export { getPaginatedComments };
