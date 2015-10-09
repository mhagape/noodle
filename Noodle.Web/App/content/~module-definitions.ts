import routeDef = require("content/route-def");
import coursesVm = require("content/courses/courses-vm");
import ndCourseCard = require("content/courses/nd-course-card");
import courseVm = require("content/course/course-vm");
import discussionsVm = require("content/course/discussions/discussions-vm");
import discussionVm = require("content/course/discussion/discussion-vm");
import outlineVm = require("content/course/outline/outline-vm");
import myCourseSection = require("content/dashboard/sections/myCourseSection/my-course-section");
import dashboardVm = require("content/dashboard/dashboard-vm");

export function init(app: ng.IModule) {
    routeDef.register(app);
    coursesVm.register(app);
    courseVm.register(app);
    discussionsVm.register(app);
    outlineVm.register(app);
    discussionVm.register(app);
    myCourseSection.register(app);
    dashboardVm.register(app);
    ndCourseCard.register(app);
}