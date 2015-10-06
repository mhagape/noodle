export function register(app: ng.IModule) {
    app.config(["$authProvider", ($authProvider) => {
        $authProvider.facebook({
            clientId: "1061474703897935"
        });

        $authProvider.google({
            clientId: "784112557512-ve7rakv16rqlvg4u82a4t9hkhmbstgru.apps.googleusercontent.com",
        });

    }]);
} 