class NdApiResources implements nd.constants.INdApiResources {
    COURSES = "courses";
    MY_COURSES = "myCourses";
} 
export function register(app: ng.IModule) {
    app.constant("ndApiResources", new NdApiResources());
}