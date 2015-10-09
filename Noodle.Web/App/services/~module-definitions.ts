import ndAuthSrv = require("services/nd-auth-srv");
import ndUserSrv = require("services/nd-user-srv");
import ndCoursesSrv = require("services/nd-courses-srv");

export function init(app: ng.IModule) {
    ndAuthSrv.register(app);
    ndUserSrv.register(app);
    ndCoursesSrv.register(app);
}