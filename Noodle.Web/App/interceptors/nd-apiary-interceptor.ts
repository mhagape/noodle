export function register(app: ng.IModule) {
    app.config(["$httpProvider", $httpProvider => {
        $httpProvider.interceptors.push("middleware");
    }]);

    app.factory("middleware", () => {
        return {
            request(config) {
                if (config.url[0] === "/" && config.url !== "/auth/google" && config.url !== "/auth/facebook") {
                    config.url = `http://private-ab898-noodle2.apiary-mock.com${config.url}`;
                }
                return config;
            }
        };
    });
} 