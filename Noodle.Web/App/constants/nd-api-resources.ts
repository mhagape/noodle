class NdApiResources implements nd.constants.INdApiResources {
    COURSES = "courses";
    MY_COURSES = "myCourses";
    LEAVE_COURSE_COMMAND = "leaveCourseCommand";
    ENROLL_COMMAND = "enrollCommand";
} 
export function register(app: ng.IModule) {
    app.constant("ndApiResources", new NdApiResources());
}