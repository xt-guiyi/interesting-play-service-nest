import { UserService } from "modules/mockModule/services/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): any;
}
