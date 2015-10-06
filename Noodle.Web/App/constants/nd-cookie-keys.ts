 class NdCookieKeys implements nd.constants.INdCookieKeys{
     public LOGGED_USER_DETAILS = "nd.cookie.loggedUserDetails"
 }
export function register(app: ng.IModule) {
    app.constant("ndCookieKeys", new NdCookieKeys());
}