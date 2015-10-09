class NdEndpoints implements nd.constants.INdEndpoints{
    public GOOGLE_USER_INFO = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=";
    public FACEBOOK_USER_INFO = "https://graph.facebook.com/me?fields=email,name&access_token=";
} 

export function register(app: ng.IModule) {
    app.constant("ndEndpoints", new NdEndpoints());
}